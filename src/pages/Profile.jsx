import React, { useState, useRef } from 'react';
import './Profile.css'
import Footer from '../components/Footer';

export default function PhotoPortfolio() {
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('votes');
  const [photos, setPhotos] = useState([]);
  const [coverImage, setCoverImage] = useState('https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1600&h=400&fit=crop');
  const [profileImage, setProfileImage] = useState('https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=200&h=200&fit=crop');
  const [showShareMenu, setShowShareMenu] = useState(false);
  const [copySuccess, setCopySuccess] = useState(false);
  
  const coverInputRef = useRef(null);
  const profileInputRef = useRef(null);
  const photoUploadRef = useRef(null);

  const handleUpload = () => {
    photoUploadRef.current.click();
  };

  const handlePhotoUpload = (e) => {
    const files = Array.from(e.target.files);
    if (files.length > 0) {
      const newPhotos = files.map((file, index) => ({
        id: Date.now() + index,
        url: URL.createObjectURL(file),
        name: file.name
      }));
      setPhotos([...photos, ...newPhotos]);
    }
  };

  const handleShare = async () => {
    const profileUrl = window.location.href;
    const shareData = {
      title: 'Guest.90978.28134 - Photo Profile',
      text: 'Check out my photo profile!',
      url: profileUrl
    };

    if (navigator.share && navigator.canShare && navigator.canShare(shareData)) {
      try {
        await navigator.share(shareData);
      } catch (err) {
        if (err.name !== 'AbortError') {
          setShowShareMenu(true);
        }
      }
    } else {
      setShowShareMenu(!showShareMenu);
    }
  };

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setCopySuccess(true);
      setTimeout(() => {
        setCopySuccess(false);
        setShowShareMenu(false);
      }, 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  const handleCoverImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setCoverImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleProfileImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <>
      <div className="profile-page">
        <div className="profile-hero" style={{ backgroundImage: `url(${coverImage})` }}>
          <div className="profile-hero-overlay"></div>
          <button onClick={() => coverInputRef.current.click()} className="profile-cover-btn">
            <svg className="profile-icon-sm" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
            </svg>
            <span>Change Cover</span>
          </button>
          <input ref={coverInputRef} type="file" accept="image/*" onChange={handleCoverImageChange} className="profile-hidden" />
        </div>

        <div className="profile-container">
          <div className="profile-header">
            <div className="profile-picture-wrapper">
              <div className="profile-picture">
                <img src={profileImage} alt="Profile" className="profile-picture-img" />
              </div>
              <button onClick={() => profileInputRef.current.click()} className="profile-edit-btn" title="Change profile picture">
                <svg className="profile-icon-sm" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                </svg>
              </button>
              <input ref={profileInputRef} type="file" accept="image/*" onChange={handleProfileImageChange} className="profile-hidden" />
            </div>

            <div className="profile-info">
              <div className="profile-info-header">
                <div>
                  <h1 className="profile-name">Guest.90978.28134</h1>
                  <p className="profile-location">India</p>
                  <div className="profile-points">
                    <svg className="profile-icon-sm" style={{ color: '#3b82f6' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span className="profile-points-text">0 GS POINTS</span>
                  </div>
                </div>

                <div className="profile-share-wrapper">
                  <button onClick={handleShare} className="profile-share-btn">
                    <svg className="profile-icon-sm" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                    </svg>
                    <span>SHARE PROFILE</span>
                  </button>

                  {showShareMenu && (
                    <div className="profile-share-menu">
                      <div className="profile-share-title">Share Profile</div>
                      <button onClick={copyToClipboard} className="profile-copy-btn">
                        {copySuccess ? (
                          <>
                            <svg className="profile-icon-sm" style={{ color: '#10b981' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            <span className="profile-copy-success">Link copied!</span>
                          </>
                        ) : (
                          <>
                            <svg className="profile-icon-sm" style={{ color: '#4b5563' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                            </svg>
                            <span className="profile-copy-text">Copy profile link</span>
                          </>
                        )}
                      </button>
                    </div>
                  )}
                </div>
              </div>

              <div className="profile-stats">
                <div className="profile-stat">
                  <div className="profile-stat-value-primary">0</div>
                  <div className="profile-stat-label">Photos</div>
                </div>
                <div className="profile-stat">
                  <div className="profile-stat-value">0</div>
                  <div className="profile-stat-label">Achievements</div>
                </div>
                <div className="profile-stat">
                  <div className="profile-stat-value">0</div>
                  <div className="profile-stat-label">Likes</div>
                </div>
                <div className="profile-stat">
                  <div className="profile-stat-value">0</div>
                  <div className="profile-stat-label">Followers</div>
                </div>
                <div className="profile-stat">
                  <div className="profile-stat-value">0</div>
                  <div className="profile-stat-label">Following</div>
                </div>
              </div>
            </div>
          </div>

          <div className="profile-controls">
            <div className="profile-search-wrapper">
              <input
                type="text"
                placeholder="SEARCH PHOTOS"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="profile-search-input"
              />
              <svg className="profile-search-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>

            <div className="profile-sort-wrapper">
              <span className="profile-sort-label">SORT BY:</span>
              <select value={sortBy} onChange={(e) => setSortBy(e.target.value)} className="profile-sort-select">
                <option value="votes">VOTES</option>
                <option value="recent">RECENT</option>
                <option value="popular">POPULAR</option>
              </select>
            </div>
          </div>

          {photos.length === 0 ? (
            <div className="profile-empty-state">
              <div className="profile-empty-icon-wrapper">
                <svg className="profile-empty-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h2 className="profile-empty-text">YOU HAVEN'T UPLOADED ANY PHOTOS YET</h2>
              <button onClick={handleUpload} className="profile-upload-btn">UPLOAD PHOTOS</button>
            </div>
          ) : (
            <div className="profile-photo-grid">
              {photos.map((photo) => (
                <div key={photo.id} className="profile-photo-card">
                  <img src={photo.url} alt={photo.name} className="profile-photo-img" />
                  <div className="profile-photo-overlay">
                    <button onClick={handleUpload} className="profile-view-btn">View</button>
                  </div>
                </div>
              ))}
              <button onClick={handleUpload} className="profile-add-more-btn">
                <svg className="profile-add-more-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
                </svg>
                <span className="profile-add-more-text">Add More</span>
              </button>
              {/* Persistent hidden file input for uploading photos (works in both empty and non-empty states) */}
            </div>
          )}
          {/* Hidden input moved outside so Add More works after photos are uploaded */}
          <input ref={photoUploadRef} type="file" accept="image/*" multiple onChange={handlePhotoUpload} className="profile-hidden" />
        </div>
      </div>
      <Footer />
    </>
  );
}