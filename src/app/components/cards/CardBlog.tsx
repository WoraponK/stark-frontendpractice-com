import React from 'react'

const CardBlog = ({ title, imgUrl, category }: { title: string, imgUrl: string, category: string }) => {
    return (
        <div className='card-blog'>
            <div className='card-blog__img'>
                <img src={imgUrl} alt="logo" />
            </div>
            <span className='card-blog-category'>{category}</span>
            <h3 className='card-blog-title'>{title}</h3>
        </div>
    )
}

export default CardBlog