import React, { useState } from 'react'
import Tour from './Tour'

function Tours({toursData, removeTour}) {

    //checking whether data is received 
    // console.log(toursData.id)


    return (
        <>
            <h1 className='text-center text-primary pt-2'>Our Tours</h1>
            <div>
                {
                    toursData.map((item) => {
                        return <Tour key={item.id} {...item} removeTour={removeTour} /> 
                    })
                }
            </div>
        </>
    )
}

export default Tours