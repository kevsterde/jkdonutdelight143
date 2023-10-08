import React from 'react'
import './MenuBox.scss'

function MenuBox({ item }) {
    return (
        <div className='menubox'>
            <div className="top">

                <figure><img src={item.img} alt={item.name} /></figure>
            </div>
            <div className="info">
                <h2>{item.name}</h2>
            </div>


        </div>
    )
}

export default MenuBox