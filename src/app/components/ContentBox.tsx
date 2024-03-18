import React from 'react'

interface ContentBoxProps {
    title: string;
    description?: string;
    isViewall: boolean;
    children?: React.ReactNode;
}

const ContentBox: React.FC<ContentBoxProps> = ({
    title,
    description,
    isViewall,
    children
}) => {
    return (
        <div className='content-box'>
            <div className='content-box__header'>
                <div className='content-box__header-left'>
                    <h2>{title}</h2>
                    <p>{description}</p>
                </div>
                <div className='content-box__header-right'>
                    <a href='#' className='uppercase'>{isViewall && ('View All')}</a>
                </div>
            </div>
            <div className='content-box__contents'>
                {children}
            </div>
        </div>
    )
}

export default ContentBox