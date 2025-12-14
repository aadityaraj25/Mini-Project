import React, { useEffect, useMemo, useState } from 'react'
import './PhotographyBody.css'

// Import images used by the sample challenges
import natureImg from '../assets/nature.jpg'
import openImg from '../assets/open.jpg'
import summerImg from '../assets/summer.jpg'
import greenImg from '../assets/green.jpg'
import closeupImg from '../assets/closeup.jpg'
import cityLifeImg from '../assets/city life.jpg'

const PhotographyBody = () => {
    // Sample challenge data (images use imported variables)
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
            description: 'Capture the essence of summer.',
            category: 'new'
        },
        {
            id: 4,
            title: 'Anything Green',
            image: greenImg,
            endDate: 'March 24, 2024',
            description: 'Show us your best green-themed photographs.',
            category: 'trending'
        },
        {
            id: 5,
            title: 'Close Up',
            image: closeupImg,
            endDate: 'March 25, 2024',
            description: 'Get up close and personal with your subject.',
            category: 'new'
        },
        {
            id: 6,
            title: 'City Life',
            image: cityLifeImg,
            endDate: 'March 26, 2024',
            description: 'Urban photography at its finest.',
            category: 'trending'
        }
    ], [])

    const [filter, setFilter] = useState('all')
    const [selected, setSelected] = useState(null) // selected challenge for popup

    const visibleChallenges = useMemo(() => {
        return filter === 'all' ? challengesData : challengesData.filter(c => c.category === filter)
    }, [filter, challengesData])

    useEffect(() => {
        // close popup on Escape
        function onKey(e) {
            if (e.key === 'Escape') setSelected(null)
        }
        window.addEventListener('keydown', onKey)
        return () => window.removeEventListener('keydown', onKey)
    }, [])

    function handleDownload(imageUrl) {
        const a = document.createElement('a')
        a.href = imageUrl
        a.download = imageUrl.split('/').pop()
        document.body.appendChild(a)
        a.click()
        document.body.removeChild(a)
    }

    return (
        <div className="photography-body">
            <div className="content">
                <main className="main-content">
                    <div className="filters-section">
                        <button
                            className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
                            onClick={() => setFilter('all')}
                            data-filter="all"
                        >
                            All Challenges
                        </button>
                        <button
                            className={`filter-btn ${filter === 'new' ? 'active' : ''}`}
                            onClick={() => setFilter('new')}
                            data-filter="new"
                        >
                            New
                        </button>
                        <button
                            className={`filter-btn ${filter === 'trending' ? 'active' : ''}`}
                            onClick={() => setFilter('trending')}
                            data-filter="trending"
                        >
                            Trending
                        </button>
                    </div>

                    <div className="challenges-grid">
                        {visibleChallenges.map(challenge => (
                            <div
                                key={challenge.id}
                                className="challenge-card"
                                onClick={() => setSelected(challenge)}
                            >
                                <img src={challenge.image} alt={challenge.title} className="challenge-image" />
                                <button
                                    className="download-btn"
                                    onClick={(e) => {
                                        e.stopPropagation()
                                        handleDownload(challenge.image)
                                    }}
                                    aria-label={`Download ${challenge.title}`}
                                >
                                    <i className="fa-regular fa-circle-down" style={{ color: '#ffffff' }}></i>
                                </button>
                                <div className="challenge-info">
                                    <h3 className="challenge-title">{challenge.title}</h3>
                                    <div className="challenge-details">
                                        <span className="challenge-date">Ends: {challenge.endDate}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </main>

                <div className={`challenge-popup ${selected ? 'visible' : ''}`} onClick={(e) => { if (e.target === e.currentTarget) setSelected(null) }}>
                    <div className="popup-content">
                        <button className="close-btn" onClick={() => setSelected(null)}>&times;</button>
                        {selected && (
                            <>
                                <h2 className="popup-title">{selected.title}</h2>
                                <p className="popup-end-date">Ends: {selected.endDate}</p>
                                <p className="popup-description">{selected.description}</p>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PhotographyBody
