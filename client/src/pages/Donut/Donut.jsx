import React from 'react'
import Slider1 from '../../images/1.png'
import { Link } from 'react-router-dom'

import './Donut.scss'

function Donut() {
    return (
        <div id="donut">
            <div id="banner">
                <div className="wrapper">
                    <div className="bnr_con">

                        <div className="slider">
                            <figure><img src={Slider1} alt="slider1" /></figure>
                            <h1>OUR DONUTS                            </h1>
                        </div>
                    </div>
                </div>
            </div>
            <div id="main_area">
                <div className="wrapper">
                    <div className="main_con">
                        <main>
                            <h2>Our dough recipe took years and many trials to perfect, just like Edison’s light bulb.</h2>
                            <p>Before we launched in 2005, we went through countless iterations to find the perfect balance, texture, and base for all of the artisanal toppings we would put on top. Freshly made from scratch, our soft and fluffy donuts melt in your mouth in all their glorious varieties.</p>
                        </main>
                    </div>
                </div>
            </div>

            <div id="bottom1">
                <div className="wrapper">
                    <div className="btm1_con">
                        <figure><img src="https://api.vold.dev.fleava.com/pictures/5b39cd517169294aba251f43/images/thumbnails/large_bc842480-48a5-42e0-9128-bcc6476162b7.jpg" alt="" /></figure>
                        <figure><img src="https://api.vold.dev.fleava.com/pictures/5b39cd517169294aba251f43/images/thumbnails/large_bc842480-48a5-42e0-9128-bcc6476162b7.jpg" alt="" /></figure>
                    </div>
                </div>
            </div>
            <div id="bottom2">
                <div className="wrapper">
                    <div className="btm2_con">
                        <div className="flex_con">

                            <figure>
                                <img src="https://api.vold.dev.fleava.com/pictures/5b39cd517169294aba251f43/2_donuts/thumbnails/large_d7848e7e-936a-4d0f-a106-6391343c6257.jpg" alt="" />
                            </figure>
                            <div className="btm2_info">
                                <h2>OUR FLUFFY DONUTS</h2>
                                <p>The secret to our donuts isn’t just in our dough, but in the finest quality ingredients that “speak” for themselves. Rich and dark chocolate, crunchy and crisp Australian almonds, New Zealand smooth cream cheese, and premium Japanese matcha just to name a few. We don’t do shortcuts. Real ingredients are more delicious. </p>
                            </div>
                        </div>
                        <Link to="/menu" className='btn_style'>Our Donuts Menu</Link>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Donut