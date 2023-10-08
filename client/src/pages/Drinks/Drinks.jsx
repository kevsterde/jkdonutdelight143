import React from 'react'
import Slider1 from '../../images/1.png'
import { Link } from 'react-router-dom'
import './Drink.scss'
function Drinks() {
    return (
        <div id="drinks">
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
                            <h2>When we developed our donuts, we didn’t stop there.</h2>
                            <p>We searched high and low for coffee that would pair perfectly with our donuts and finally we settled on fine selections of Arabica beans. Similar to wine, coffee beans are influenced by soil, altitude, and other climate factors that naturally make some coffee trees better than others.</p>
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

                        <figure>
                            <img src="https://api.vold.dev.fleava.com/pictures/5b39cd517169294aba251f43/3_coffee/thumbnails/large_4b9fb33e-c813-439e-a71e-d5214e2ad747.jpg" alt="" />
                        </figure>
                        <div className="btm2_info">
                            <p>Our single origin Arabica beans hail from world-famous Colombia and Ethiopia, while our exclusive unique blend originates from Indonesia’s rich soils in Sumatra’s Lintong, Gayo, and Mandheling. Sit back, relax, & sip on J.Coffee!</p>
                            <Link to="/menu" className='btn_style'>Our Drinks Collection</Link>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Drinks