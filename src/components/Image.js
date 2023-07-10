import React from 'react'

export default function Image(props) {
    return (
        <div className='flex justify-center items-center shadow-sm'>
            <div className="image-card w-full">
                <div className="image overflow-hidden">
                    <img src={props.src} alt={props.alt} className='object-cover w-full h-72 rounded items-center' loading='lazy' />
                </div>
            </div>
        </div>
    )
}