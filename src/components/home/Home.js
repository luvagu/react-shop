import React from 'react'
import './Home.scss'

function Home() {
    return (
        <div className="home">
            <div className="category-menu">
                <div className="category-item">
                    <div className="content">
                        <h1 className="title">Title 1</h1>
                        <span className="subtitle">Subtitle </span>
                    </div>
                </div>
                <div className="category-item">
                    <div className="content">
                        <h1 className="title">Title 1</h1>
                        <span className="subtitle">Subtitle 2</span>
                    </div>
                </div>
                <div className="category-item">
                    <div className="content">
                        <h1 className="title">Title 1</h1>
                        <span className="subtitle">Subtitle 3</span>
                    </div>
                </div>
                <div className="category-item">
                    <div className="content">
                        <h1 className="title">Title 1</h1>
                        <span className="subtitle">Subtitle 4</span>
                    </div>
                </div>
                <div className="category-item">
                    <div className="content">
                        <h1 className="title">Title 5</h1>
                        <span className="subtitle">Subtitle 5</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
