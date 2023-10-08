import React, { useState } from 'react'
import MenuBox from '../../components/MenuBox/MenuBox';
import './Menu.scss'
function Menu() {

    const data_donut = [
        {
            id: 1,
            name: 'Alcapone',
            img: 'http://api.vold.dev.fleava.com/pictures/5b39cd517169294aba251f43/donuts/4be290c0-6623-4407-afd9-773f88a0bdd3.jpg',
        },
        {
            id: 2,
            name: 'Avocado Dicaprio',
            img: 'http://api.vold.dev.fleava.com/pictures/5b39cd517169294aba251f43/donuts/bd66767e-3fdf-4c92-b822-50b524e094ff.jpg',
        },
        {
            id: 3,
            name: 'Berry Spears',
            img: 'http://api.vold.dev.fleava.com/pictures/5b39cd517169294aba251f43/donuts/fcde6082-2a50-447c-bd1f-c022e7a74a67.jpg',
        },
        {
            id: 4,
            name: 'Black Jack',
            img: 'http://api.vold.dev.fleava.com/pictures/5b39cd517169294aba251f43/donuts/8777fff0-1018-4495-b025-33bd4c2fefcd.jpg',
        },
        {
            id: 5,
            name: 'Blue Berrymore',
            img: 'http://api.vold.dev.fleava.com/pictures/5b39cd517169294aba251f43/donuts/bd62cf8e-45a0-4ed9-a971-78ec60455055.jpg',
        },
        {
            id: 6,
            name: 'Caviar Chocolate',
            img: 'http://api.vold.dev.fleava.com/pictures/5b39cd517169294aba251f43/donuts/a97bafad-2f9b-4148-9fc0-114ec47264c0.jpg',
        },]


    const [selected, setSelected] = useState("donut");


    return (
        <div id="menu">
            <div className="wrapper">
                <div className="menu_con">
                    <h1>Our Menu</h1>
                    <div className="categories">
                        <button>Donuts</button>
                        <button>Drinks</button>
                        <button>Others</button>
                    </div>
                    <div className="menu_boxes">
                        {data_donut.map(item => (<MenuBox key={item.id} item={item} />))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Menu