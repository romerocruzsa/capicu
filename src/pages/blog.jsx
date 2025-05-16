import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../styles/Blog.css";
import { getAllPosts, getAllTags } from "../utils/blogUtils";

// YouTube ID extractor utility
const getYouTubeId = (url) => {
  if (!url) return null;
  
  // Match various YouTube URL formats
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
  const match = url.match(regExp);
  
  return (match && match[2].length === 11) ? match[2] : null;
};

export default function Blog() {
  const [posts, setPosts] = useState([]);
  const [allTags, setAllTags] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [activeFilter, setActiveFilter] = useState("all");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadBlogData() {
      try {
        const loadedPosts = await getAllPosts();
        setPosts(loadedPosts);
        
        const loadedTags = await getAllTags();
        setAllTags(loadedTags);
        
        setLoading(false);
      } catch (error) {
        console.error("Error loading blog data:", error);
        setLoading(false);
      }
    }
    
    loadBlogData();
  }, []);

  // Filter posts based on search and tag filter
  const filteredPosts = posts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesTag = activeFilter === "all" || 
                      (post.tags && post.tags.some(tag => tag.toLowerCase() === activeFilter));
    return matchesSearch && matchesTag;
  });

  // Render media (image or video) for a post
  const renderPostMedia = (post) => {
    // In blog listing, ALWAYS show the cover image (video will be shown in individual post view)
    if (post.coverImage) {
      return (
        <div className="post-image">
          <img src={post.coverImage} alt={post.title} />
        </div>
      );
    }
    
    // Add a video indicator if the post has a video but no image
    if (!post.coverImage && post.coverVideo && post.coverVideo.type === 'youtube') {
      return (
        <div className="post-image post-video-indicator">
          <div className="video-placeholder">
            <span>Video Post</span>
            <i className="video-icon">▶</i>
          </div>
        </div>
      );
    }
    
    // No media available
    return null;
  };

  if (loading) {
    return (
      <div className="blog-page">
        <div className="blog-loading">
          <p>Loading blog posts...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="blog-page">
      <div className="blog-header">
        <h1><em>La Libreta</em>  Blog</h1>
        <p className="blog-subtitle">News, updates, and insights about our projects and AI deployment</p>
      </div>
      
      <div className="blog-controls">
        <div className="blog-search">
          <input
            type="text"
            placeholder="Search posts..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        
        <div className="blog-filters">
          <button 
            className={`filter-button ${activeFilter === "all" ? "active" : ""}`}
            onClick={() => setActiveFilter("all")}
          >
            All
          </button>
          {allTags.map(tag => (
            <button
              key={tag}
              className={`filter-button ${activeFilter === tag ? "active" : ""}`}
              onClick={() => setActiveFilter(tag)}
            >
              {tag.charAt(0).toUpperCase() + tag.slice(1)}
            </button>
          ))}
        </div>
      </div>
      
      <div className="blog-posts-container">
        {filteredPosts.length === 0 ? (
          <div className="no-posts">
            <p>No posts matching your criteria. Try adjusting your filters.</p>
          </div>
        ) : (
          filteredPosts.map(post => (
            <div className="blog-post-card" key={post.slug}>
              {renderPostMedia(post)}
              <div className="post-content">
                <div className="post-meta">
                  <span className="post-date">{post.date}</span>
                  <div className="post-tags">
                    {post.tags && post.tags.map(tag => (
                      <span 
                        className="post-tag" 
                        key={tag}
                        onClick={() => setActiveFilter(tag.toLowerCase())}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <h2 className="post-title">{post.title}</h2>
                <p className="post-excerpt">{post.excerpt}</p>
                <Link to={`/blog/${post.slug}`} className="read-more-link">
                  Read More
                </Link>
                {post.coverVideo && post.coverVideo.type === 'youtube' && (
                  <span className="has-video-indicator">
                    📹 Video Available
                  </span>
                )}
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
} 