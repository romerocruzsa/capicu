// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { fileURLToPath } from 'url';

export default defineConfig({
  base: '/', // Changed from '/capicu/' to '/' for custom domain
  assetsInclude: ['**/README.md', '**/template.md'],
  plugins: [
    react(),
    {
      name: 'markdown-loader',
      transform(code, id) {
        // Only process Markdown files but exclude README.md and template.md
        if (!id.endsWith('.md') || id.includes('README.md') || id.includes('template.md')) {
          return null;
        }
        
        const frontMatterPattern = /^---\n([\s\S]*?)\n---\n([\s\S]*)$/;
        const match = code.match(frontMatterPattern);
        
        if (!match) {
          return null;
        }
        
        const [, frontMatterBlock, markdownContent] = match;
        
        // Parse frontmatter using a simpler approach focused on nested objects
        const metadata = {};
        
        // First pass: get all top-level keys
        const lines = frontMatterBlock.split('\n');
        let currentKey = null;
        let isNested = false;
        let nestLevel = 0;
        let inArray = false;
        
        for (let i = 0; i < lines.length; i++) {
          const line = lines[i].trimEnd(); // Keep leading whitespace for indent detection
          if (!line.trim()) continue; // Skip empty lines
          
          const indent = line.search(/\S/);
          const trimmedLine = line.trim();
          
          // Handle top-level keys (no indent)
          if (indent === 0 && trimmedLine.includes(':')) {
            const colonPos = trimmedLine.indexOf(':');
            const key = trimmedLine.substring(0, colonPos).trim();
            const value = trimmedLine.substring(colonPos + 1).trim();
            
            currentKey = key;
            isNested = trimmedLine.endsWith(':') && value === '';
            nestLevel = indent;
            inArray = false;
            
            if (!isNested) {
              // Handle simple key-value at root level
              metadata[key] = value.replace(/^"(.*)"$/, '$1'); // Remove quotes if present
            } else {
              // Initialize object or array
              if (trimmedLine.match(/^tags:$/)) {
                metadata[key] = [];
                inArray = true;
              } else {
                metadata[key] = {};
              }
            }
          }
          // Handle nested properties (indented)
          else if (indent > 0 && currentKey && trimmedLine.includes(':')) {
            const colonPos = trimmedLine.indexOf(':');
            const key = trimmedLine.substring(0, colonPos).trim();
            const value = trimmedLine.substring(colonPos + 1).trim();
            
            // For nested objects like author
            metadata[currentKey][key] = value.replace(/^"(.*)"$/, '$1'); // Remove quotes if present
          }
          // Handle array items
          else if (trimmedLine.startsWith('-') && currentKey && metadata[currentKey] instanceof Array) {
            const value = trimmedLine.substring(1).trim().replace(/^"(.*)"$/, '$1'); // Remove leading dash and quotes
            metadata[currentKey].push(value);
          }
        }
        
        // Special case to ensure coverVideo is an object
        if (metadata.coverVideo && typeof metadata.coverVideo === 'string' && metadata.coverVideo === '') {
          metadata.coverVideo = {};
        }
        
        // Return the processed content
        return {
          code: `
            export const metadata = ${JSON.stringify(metadata)};
            export default ${JSON.stringify(markdownContent)};
          `,
          map: null
        };
      }
    }
  ],
  server: {
    historyApiFallback: true,
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: undefined,
      },
    },
  },
});