// Using dynamic imports for browser compatibility
export async function getAllPosts() {
  const posts = [];
  
  try {
    // Get all markdown files from the blog directory
    const modules = import.meta.glob('../content/blog/*.md');
    
    console.log('Available modules:', Object.keys(modules));
    
    // Load each post's content and metadata
    for (const path in modules) {
      // Skip README.md and template.md files
      if (path.includes('README.md') || path.includes('template.md')) {
        console.log('Skipping file:', path);
        continue;
      }
      
      console.log('Processing file:', path);
      try {
        const module = await modules[path]();
        console.log('Module loaded:', module);
        
        const slug = path.split('/').pop().replace('.md', '');
        
        // Process frontmatter and content
        if (module.metadata && module.default) {
          // Ensure author data is properly formatted
          if (module.metadata.author && typeof module.metadata.author === 'string') {
            // Try to parse author string if it's not already an object
            try {
              module.metadata.author = JSON.parse(module.metadata.author);
            } catch (e) {
              console.warn('Could not parse author JSON string:', e);
            }
          }
          
          posts.push({
            ...module.metadata,
            slug,
            content: module.default,
          });
          console.log('Post added:', slug);
        } else {
          console.log('Missing metadata or content in:', path);
        }
      } catch (err) {
        console.error(`Error processing module ${path}:`, err);
      }
    }
    
    // Sort posts by date (newest first)
    return posts.sort((a, b) => new Date(b.date) - new Date(a.date));
  } catch (error) {
    console.error('Error loading blog posts:', error);
    return [];
  }
}

export async function getPostBySlug(slug) {
  try {
    // Import the specific markdown file
    const module = await import(`../content/blog/${slug}.md`);
    console.log('RAW MODULE DATA:', module);
    
    if (module.metadata && module.default) {
      // Only try to parse string if needed, don't add fallback
      if (module.metadata.author && typeof module.metadata.author === 'string') {
        try {
          module.metadata.author = JSON.parse(module.metadata.author);
        } catch (e) {
          console.warn('Could not parse author JSON string:', e);
          // Don't add fallback, just use what we have
        }
      }
      
      // Add debug info for author specifically
      console.log('AUTHOR DATA TYPE:', typeof module.metadata.author);
      console.log('AUTHOR DATA:', module.metadata.author);
      
      const post = {
        ...module.metadata,
        slug,
        content: module.default,
      };
      
      // Add more explicit debugging for the complete object
      console.table({
        'author.name': post.author?.name || 'undefined',
        'author.avatar': post.author?.avatar || 'undefined',
        'author.bio': post.author?.bio || 'undefined',
        'typeof author': typeof post.author,
        'has author': !!post.author
      });
      
      return post;
    }
    
    return null;
  } catch (error) {
    console.error(`Error loading post ${slug}:`, error);
    return null;
  }
}

export async function getAllTags() {
  const posts = await getAllPosts();
  const tags = new Set();
  
  posts.forEach(post => {
    if (post.tags && Array.isArray(post.tags)) {
      post.tags.forEach(tag => tags.add(tag.toLowerCase()));
    }
  });
  
  return Array.from(tags);
} 