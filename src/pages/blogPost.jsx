import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { FaArrowLeft, FaCalendarAlt, FaTag } from "react-icons/fa";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import { getPostBySlug, getAllPosts } from "../utils/blogUtils";
import "../styles/BlogPost.css";

// YouTube video component
const YouTubeVideo = ({ videoId }) => {
  return (
    <div className="blog-post-video">
      <iframe
        src={`https://www.youtube.com/embed/${videoId}`}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default function BlogPost() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [relatedPosts, setRelatedPosts] = useState([]);

  useEffect(() => {
    async function loadPost() {
      try {
        // Load the post by slug
        const currentPost = await getPostBySlug(slug);
        
        if (currentPost) {
          console.log('Loaded post data:', currentPost);
          console.log('Author data:', currentPost.author);
          setPost(currentPost);
          
          // Find related posts (posts with common tags)
          const allPosts = await getAllPosts();
          const related = allPosts
            .filter(p => p.slug !== slug && 
                       p.tags && currentPost.tags &&
                       p.tags.some(tag => currentPost.tags.includes(tag)))
            .slice(0, 3); // Limit to 3 related posts
          
          setRelatedPosts(related);
        }
        
        setLoading(false);
      } catch (error) {
        console.error(`Error loading post ${slug}:`, error);
        setLoading(false);
      }
    }
    
    loadPost();
    
    // Scroll to top when post changes
    window.scrollTo(0, 0);
  }, [slug]);

  // Extract YouTube video ID from URL
  const getYouTubeId = (url) => {
    if (!url) return null;
    
    // Match various YouTube URL formats
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    
    return (match && match[2].length === 11) ? match[2] : null;
  };

  // Render media (image or video) for a post
  const renderPostMedia = (post) => {
    // On individual post page, ALWAYS prioritize video if available
    if (post.coverVideo && post.coverVideo.type === 'youtube') {
      const videoId = getYouTubeId(post.coverVideo.url);
      
      if (videoId) {
        return <YouTubeVideo videoId={videoId} />;
      }
    }
    
    // Fallback to cover image if no video is available
    if (post.coverImage) {
      return (
        <div className="blog-post-cover">
          <img src={post.coverImage} alt={post.title} />
        </div>
      );
    }
    
    return null;
  };

  if (loading) {
    return <div className="blog-post-loading">Loading...</div>;
  }

  if (!post) {
    return (
      <div className="blog-post-not-found">
        <h2>Post Not Found</h2>
        <p>Sorry, the blog post you're looking for doesn't exist.</p>
        <Link to="/blog" className="back-to-blog">
          <FaArrowLeft /> Back to Blog
        </Link>
      </div>
    );
  }

  return (
    <div className="blog-post-page">
      <div className="blog-post-nav">
        <button onClick={() => navigate(-1)} className="back-button">
          <FaArrowLeft /> Back
        </button>
        <Link to="/blog" className="blog-home-link">
          All Posts
        </Link>
      </div>

      <article className="blog-post">
        <header className="blog-post-header">
          <h1>{post.title}</h1>
          
          <div className="blog-post-meta">
            <div className="blog-post-date">
              <FaCalendarAlt />
              <span>{post.date}</span>
            </div>
            
            <div className="blog-post-tags">
              {post.tags && post.tags.map(tag => (
                <Link 
                  to={`/blog?tag=${tag.toLowerCase()}`}
                  className="blog-post-tag" 
                  key={tag}
                >
                  <FaTag />
                  <span>{tag}</span>
                </Link>
              ))}
            </div>
          </div>
          
          {renderPostMedia(post)}
        </header>

        <div className="blog-post-content">
          <ReactMarkdown 
            remarkPlugins={[remarkGfm]} 
            rehypePlugins={[rehypeRaw]}
          >
            {post.content}
          </ReactMarkdown>
        </div>
        
        {post.author && (
          <div className="blog-post-author">
            {post.author.avatar && (
              <img src={post.author.avatar} alt={post.author.name || 'Author'} className="author-avatar" />
            )}
            <div className="author-info">
              <h3>Written by {post.author.name || 'Unknown Author'}</h3>
              {post.author.bio && <p>{post.author.bio}</p>}
            </div>
          </div>
        )}
      </article>

      {relatedPosts.length > 0 && (
        <div className="related-posts">
          <h2>Related Posts</h2>
          <div className="related-posts-grid">
            {relatedPosts.map(relatedPost => (
              <Link to={`/blog/${relatedPost.slug}`} className="related-post-card" key={relatedPost.slug}>
                {relatedPost.coverImage && (
                  <div className="related-post-image">
                    <img src={relatedPost.coverImage} alt={relatedPost.title} />
                  </div>
                )}
                <div className="related-post-content">
                  <h3>{relatedPost.title}</h3>
                  <span className="related-post-date">{relatedPost.date}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
} 