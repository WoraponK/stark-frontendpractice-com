import React from 'react'

const CardFeature = ({ title, imgUrl, bgClr, textClr }: { title: string, imgUrl?: string, bgClr?: string, textClr?: string }) => {
    return (
        <div className='card-feature' style={{ backgroundColor: `${bgClr}` }}>
            <h3 className='card-feature-title' style={{ color: `${textClr}`}}>{title}</h3>
            <div className='card-feature__img'>
                <img src={imgUrl} alt="illustrator" />
            </div>
        </div>
    )
}

export default CardFeature