import React, { useEffect, useMemo, useState } from 'react';
import './PhotographyBody.css';

// Asset Imports
import natureImg from '../assets/nature.jpg';
import openImg from '../assets/open.jpg';
import summerImg from '../assets/summer.jpg';
import greenImg from '../assets/green.jpg';
import closeupImg from '../assets/closeup.jpg';
import cityLifeImg from '../assets/city life.jpg';

const PhotographyBody = () => {
    // Challenge Data Logic
    const challengesData = useMemo(() => [
        {
            id: 1,
            title: "Nature's Design",
            image: natureImg,
            endDate: 'March 21, 2024',
            description: 'Capture the intricate patterns and designs found in nature.',
            category: 'trending'
        },
        {
            id: 2,
            title: 'Open Theme',
            image: openImg,
            endDate: 'March 22, 2024',
            description: 'Show us your best work, any subject welcome.',
            category: 'trending'
        },
        {
            id: 3,
            title: 'Summer Time',
            image: summerImg,
            endDate: 'March 23, 2024',
            description: 'Capture the essence of summer sunshine and outdoor fun.',
            category: 'new'
        },
        {
            id: 4,
            title: 'Anything Green',
            image: greenImg,
            endDate: 'March 24, 2024',
            description: 'Show us your best green-themed photographs from forests to macro shots.',
            category: 'trending'
        },
        {
            id: 5,
            title: 'Close Up',
            image: closeupImg,
            endDate: 'March 25, 2024',
            description: 'Get up close and personal with your subject using macro techniques.',
            category: 'new'
        },
        {
            id: 6,
            title: 'City Life',
            image: cityLifeImg,
            endDate: 'March 26, 2024',
            description: 'Urban photography showcasing the hustle and bustle of the streets.',
            category: 'trending'
        }
    ], []);

    const [filter, setFilter] = useState('all');
    const [selected, setSelected] = useState(null);

    const visibleChallenges = useMemo(() => {
        return filter === 'all' ? challengesData : challengesData.filter(c => c.category === filter);
    }, [filter, challengesData]);

    useEffect(() => {
        // Close popup on Escape key
        function onKey(e) { 
            if (e.key === 'Escape') setSelected(null);
        }
        window.addEventListener('keydown', onKey);
        return () => window.removeEventListener('keydown', onKey);
    }, []);

    function handleDownload(imageUrl) {
        const a = document.createElement('a');
        a.href = imageUrl;
        // Extracts filename or gives a default
        a.download = imageUrl.split('/').pop() || 'photography-challenge.jpg';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
    }

    return (
        <div className="photography-body-wrapper">
            <div className="photography-body-content">
                <main className="photography-body-main-content">
                    {/* Filters Section */}
                    <div className="photography-body-filters-section">
                        <button
                            className={`photography-body-filter-btn ${filter === 'all' ? 'active' : ''}`}
                            onClick={() => setFilter('all')}
                        >
                            All Challenges
                        </button>
                        <button
                            className={`photography-body-filter-btn ${filter === 'new' ? 'active' : ''}`}
                            onClick={() => setFilter('new')}
                        >
                            New
                        </button>
                        <button
                            className={`photography-body-filter-btn ${filter === 'trending' ? 'active' : ''}`}
                            onClick={() => setFilter('trending')}
                        >
                            Trending
                        </button>
                    </div>

                    {/* Grid Section */}
                    <div className="photography-body-challenges-grid">
                        {visibleChallenges.map(challenge => (
                            <div
                                key={challenge.id}
                                className="photography-body-challenge-card"
                                onClick={() => setSelected(challenge)}
                            >
                                <img 
                                    src={challenge.image} 
                                    alt={challenge.title} 
                                    className="photography-body-challenge-image" 
                                />
                                <button
                                    className="photography-body-download-btn"
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        handleDownload(challenge.image);
                                    }}
                                    aria-label={`Download ${challenge.title}`}
                                >
                                    <i className="fa-regular fa-circle-down" style={{ color: '#ffffff', fontSize: '1.2rem' }}></i>
                                </button>
                                <div className="photography-body-challenge-info">
                                    <h3 className="photography-body-challenge-title">{challenge.title}</h3>
                                    <div className="photography-body-challenge-details">
                                        <span className="photography-body-challenge-date">Ends: {challenge.endDate}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </main>

                {/* Popup Modal */}
                <div 
                    className={`photography-body-challenge-popup ${selected ? 'visible' : ''}`} 
                    onClick={(e) => { if (e.target === e.currentTarget) setSelected(null) }}
                >
                    <div className="photography-body-popup-content">
                        <button 
                            className="photography-body-close-btn" 
                            onClick={() => setSelected(null)}
                        >
                            &times;
                        </button>
                        {selected && (
                            <>
                                <h2 className="photography-body-popup-title">{selected.title}</h2>
                                <p style={{ color: '#3b82f6', fontWeight: '600', fontSize: '0.9rem' }}>
                                    Ends: {selected.endDate}
                                </p>
                                <p style={{ color: '#4b5563', lineHeight: '1.6', marginTop: '1rem' }}>
                                    {selected.description}
                                </p>
                                <button 
                                    onClick={() => setSelected(null)}
                                    style={{
                                        marginTop: '1.5rem',
                                        width: '100%',
                                        padding: '0.75rem',
                                        backgroundColor: '#1a1a1a',
                                        color: 'white',
                                        border: 'none',
                                        borderRadius: '8px',
                                        cursor: 'pointer'
                                    }}
                                >
                                    Close Details
                                </button>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PhotographyBody;