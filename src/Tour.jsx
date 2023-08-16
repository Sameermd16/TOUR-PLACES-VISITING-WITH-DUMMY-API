import React, { useState } from 'react'


export default function Tour({id, image, name, price, info, removeTour}) {

    const [fullInfo, setFullInfo] = useState(false)

    return (
        <article className='border border-secondary mb-2 rounded'>
            <img src={image} width="100%" />
            <h3 className='d-flex justify-content-between py-3'>{name} <span>${price}</span></h3>
            <p>
                {fullInfo ? info : `${info.substring(0, 150)}...`}
                <button className='btn btn-sm btn-outline-secondary ms-2'
                    onClick={() => setFullInfo(!fullInfo)}
                >
                    {fullInfo ? 'show less' : 'read more'}
                </button>
            </p>
            <div className='text-center mb-4'>
                <button className='btn btn-sm btn-outline-danger' onClick={() => removeTour(id)}>not interested</button>
            </div>
        </article>
    )
}