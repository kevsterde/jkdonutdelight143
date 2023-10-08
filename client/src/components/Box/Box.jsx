import React from 'react'
import { Link } from 'react-router-dom'

import './Box.scss'

const Box = ({ item }) => {
    return (
        <div className='box'>
            <figure><img src={item.img} alt={item.title} /></figure>
            <div className="info">
                <Link to={item.link}><h2>{item.title}</h2></Link>
                <p>{item.description}</p>
            </div>

        </div>
    )
}

export default Box