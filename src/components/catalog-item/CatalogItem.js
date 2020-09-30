import React from 'react'
import './CatalogItem.scss'

function CategoryItem({ title, imageUrl, size }) {
    return (
        <div className={`catalog-item ${size}`} style={{ backgroundImage: `url(${imageUrl})` }}>
            <div className="content">
                <h1 className="title">{title}</h1>
                <span className="subtitle">SHOP NOW</span>
            </div>
        </div>
    )
}

export default CategoryItem
