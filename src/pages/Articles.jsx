import React, { useState } from 'react';
import './Articles.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Articles = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const articles = [
    {
      id: 1,
      title: "Mastering Natural Light Photography",
      excerpt: "Discover the secrets of capturing stunning photographs using only natural light. Learn about golden hour, diffused lighting, and more.",
      category: "techniques",
      author: "Priya Sharma",
      date: "Dec 10, 2025",
      readTime: "8 min read",
      image: "https://images.unsplash.com/photo-1452587925148-ce544e77e70d?w=800&h=500&fit=crop"
    },
    {
      id: 2,
      title: "Street Photography: Capturing Life's Moments",
      excerpt: "Learn the art of street photography and how to capture candid moments that tell compelling stories.",
      category: "genre",
      author: "Rahul Verma",
      date: "Dec 8, 2025",
      readTime: "6 min read",
      image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=800&h=500&fit=crop"
    },
    {
      id: 3,
      title: "Best Camera Gear for Beginners in 2025",
      excerpt: "A comprehensive guide to choosing your first camera and essential accessories without breaking the bank.",
      category: "gear",
      author: "Ananya Chauhan",
      date: "Dec 5, 2025",
      readTime: "10 min read",
      image: "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=800&h=500&fit=crop"
    },
    {
      id: 4,
      title: "Understanding Composition Rules",
      excerpt: "Master the rule of thirds, leading lines, and other composition techniques to elevate your photography.",
      category: "techniques",
      author: "Vikram Singh",
      date: "Dec 2, 2025",
      readTime: "7 min read",
      image: "https://images.unsplash.com/photo-1471341971476-ae15ff5dd4ea?w=800&h=500&fit=crop"
    },
    {
      id: 5,
      title: "Portrait Photography: Tips from the Pros",
      excerpt: "Professional portrait photographers share their top tips for capturing stunning portraits that connect with viewers.",
      category: "genre",
      author: "Meera Patel",
      date: "Nov 28, 2025",
      readTime: "9 min read",
      image: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=800&h=500&fit=crop"
    },
    {
      id: 6,
      title: "Editing Workflow: From RAW to Final Image",
      excerpt: "Step-by-step guide to developing a professional editing workflow that saves time and produces consistent results.",
      category: "editing",
      author: "Aditya Narayana",
      date: "Nov 25, 2025",
      readTime: "12 min read",
      image: "https://images.unsplash.com/photo-1542038784456-1ea8e935640e?w=800&h=500&fit=crop"
    }
  ];

  const categories = [
    { id: 'all', name: 'All Articles' },
    { id: 'techniques', name: 'Techniques' },
    { id: 'gear', name: 'Gear' },
    { id: 'genre', name: 'Genre' },
    { id: 'editing', name: 'Editing' }
  ];

  const filteredArticles = selectedCategory === 'all' 
    ? articles 
    : articles.filter(article => article.category === selectedCategory);

  return (
    <div className="articles-page">
      <Navbar />

      {/* Hero Section */}
      <div className="articles-hero">
        <h1>Photography Insights</h1>
        <p>Expert tips, tutorials, and inspiration to elevate your photography skills</p>
      </div>

      <div className="articles-container">
        {/* Category Filter */}
        <div className="category-filter">
          {categories.map(category => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`category-btn ${selectedCategory === category.id ? 'active' : ''}`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Articles Grid */}
        <div className="articles-grid">
          {filteredArticles.map(article => (
            <article key={article.id} className="article-card">
              <div className="article-image">
                <img src={article.image} alt={article.title} />
              </div>
              
              <div className="article-content">
                <div className="article-category">{article.category}</div>
                
                <h3 className="article-title">{article.title}</h3>
                
                <p className="article-excerpt">{article.excerpt}</p>
                
                <div className="article-meta">
                  <div className="article-author">
                    <div className="author-name">{article.author}</div>
                    <div className="article-date">{article.date}</div>
                  </div>
                  <div className="article-read-time">{article.readTime}</div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Newsletter Section */}
        <div className="newsletter-section">
          <h2>Stay Updated</h2>
          <p>Subscribe to our newsletter for the latest photography tips and articles</p>
          <div className="newsletter-form">
            <input
              type="email"
              placeholder="Enter your email"
              className="newsletter-input"
            />
            <button className="newsletter-btn">Subscribe</button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Articles;