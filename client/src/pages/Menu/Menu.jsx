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
    const data_drinks = [
        {
            id: 1,
            name: 'Blueberry Yogurt Frappe',
            img: 'http://api.vold.dev.fleava.com/pictures/5b39cd517169294aba251f43/jcoffee/a0b26113-f804-4839-8303-f50f3ea00ce4.jpg',
        },
        {
            id: 2,
            name: 'Choco Forest Frappe',
            img: 'http://api.vold.dev.fleava.com/pictures/5b39cd517169294aba251f43/jcoffee/dbd8793f-bb89-43be-a061-abce7112ce9a.jpg',
        },
        {
            id: 3,
            name: 'Chocolate Frappe',
            img: 'http://api.vold.dev.fleava.com/pictures/5b39cd517169294aba251f43/jcoffee/2a1cadd7-4d5f-4e02-9a28-1964e09a84ac.jpg',
        },
        {
            id: 4,
            name: 'Chocomint Frappe',
            img: 'http://api.vold.dev.fleava.com/pictures/5b39cd517169294aba251f43/jcoffee/e9a1e75a-272b-4041-be72-2cafcb53379c.jpg',
        },
        {
            id: 5,
            name: 'Green Tea Frappe',
            img: 'http://api.vold.dev.fleava.com/pictures/5b39cd517169294aba251f43/jcoffee/4edcbe34-60e9-4c0f-8f29-cb0697f0d88b.jpg',
        },
        {
            id: 6,
            name: 'Strawberry Yogurt Frappe',
            img: 'http://api.vold.dev.fleava.com/pictures/5b39cd517169294aba251f43/jcoffee/f55e6723-7c26-4fa6-bd34-73ac60d487ee.jpg',
        },]


    const [selected, setSelected] = useState(true);


    return (
        <div id="menu">
            <div className="wrapper">
                <div className="menu_con">
                    <h1>Our Menu</h1>
                    <div className="categories">
                        <button onClick={() => setSelected(true)}>Donuts</button>
                        <button onClick={() => setSelected(false)}>Drinks</button>
                        <button>Others</button>
                    </div>
                    <div className="menu_boxes">
                        {selected && data_donut.map(item => (<MenuBox key={item.id} item={item} />))}
                        {!selected && data_drinks.map(item => (<MenuBox key={item.id} item={item} />))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Menu