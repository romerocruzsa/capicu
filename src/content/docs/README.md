# Blog Posts

This directory contains all the blog posts for the Capicú website. Each post is a Markdown file with frontmatter metadata.

## Adding a New Blog Post

To add a new blog post:

1. Create a new `.md` file in this directory
   - Use a descriptive filename (e.g., `introducing-new-feature.md`)
   - Ensure the filename matches the `slug` in your frontmatter

2. Copy the structure from `template.md` and fill in your content

3. Required frontmatter fields:
   - `id`: Unique numeric identifier (increment from the highest existing ID)
   - `title`: The title of your blog post
   - `slug`: URL-friendly version of the title (used in the URL)
   - `date`: Publication date (YYYY-MM-DD format)
   - `excerpt`: Brief summary (appears in previews)
   - `coverImage`: URL to the main image

4. Optional frontmatter fields:
   - `coverVideo`: Object containing video embed information
     - `url`: The embed URL (e.g., YouTube/Vimeo)
     - `type`: Video provider (`youtube` or `vimeo`)
     - `thumbnail`: Fallback image if video doesn't load
   - `author`: Object containing author information
     - `name`: Author's name
     - `avatar`: URL to author's image
     - `bio`: Brief author bio
   - `tags`: Array of relevant tags (used for filtering)

5. Write your content in Markdown format after the frontmatter section

## Example Frontmatter

```yaml
---
id: 4
title: "My New Blog Post"
slug: "my-new-blog-post"
date: "2024-06-01"
coverImage: "https://example.com/image.jpg"
excerpt: "This is a brief summary of my new blog post."
author:
  name: "John Doe"
  avatar: "https://example.com/avatar.jpg"
  bio: "Product Manager at Capicú"
tags:
  - "News"
  - "Product Update"
  - "Feature"
---
```

## Supported Markdown Features

The blog supports standard Markdown syntax plus:

- GitHub Flavored Markdown (tables, strikethrough, etc.)
- Raw HTML when needed
- Syntax highlighting for code blocks
- Embedded YouTube/Vimeo videos

## Images

For blog post images, you can:

1. Use URLs to external images
2. Add images to the public directory and reference them by path
3. Use Unsplash or similar services for high-quality images 