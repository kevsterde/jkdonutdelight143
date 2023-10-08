import React, { useEffect, useState } from 'react'

import './Home.scss'
import Slider1 from '../../images/1.png'
import Slider2 from '../../images/2.png'
import Slider3 from '../../images/3.png'
import Box from '../../components/Box/Box'


function Home() {

    const [currentSlide, setCurrentSlide] = useState(0);
    const boxes = [{
        id: 1,
        img: "https://api.vold.dev.fleava.com/pictures/5b39cd517169294aba251f43/images/thumbnails/large_68485e93-d997-4170-b562-9c8b87403a83.jpg",
        title: "Be Our Partner",
        description: "Bring J.CO even closer to your community.",
        link: "/",
    },
    {
        id: 2,
        img: "https://api.vold.dev.fleava.com/pictures/5b39cd517169294aba251f43/images/thumbnails/large_68485e93-d997-4170-b562-9c8b87403a83.jpg",
        title: "Our Locations",
        description: "Find a store near you.",
        link: "/",
    }


    ]

    const prevSlide = () => {
        setCurrentSlide(currentSlide === 0 ? 2 : (prev) => (prev - 1));
    }
    const nextSlide = () => {
        setCurrentSlide(currentSlide === 2 ? 0 : (prev) => (prev + 1));
    }


    return (
        <div id="home">

            <div id="banner">
                <div className="wrapper">
                    <div className="bnr_con">

                        <div className="slider">
                            <div className="container" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>

                                <figure><img src={Slider1} alt="slider1" /></figure>
                                <figure> <img src={Slider2} alt="" /></figure>
                                <figure><img src={Slider3} alt="" /></figure>
                            </div>
                            <div className="btn">
                                <div className="prev" onClick={prevSlide}>prev</div>
                                <div className="next" onClick={nextSlide}>next</div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

            <div id="main_area">
                <div className="wrapper">
                    <div className="main_con">
                        <main><h1>What’s your mood? We’ve got exceptionally handcrafted donuts, premium sourced Arabica coffee, and other crave-inducing treats prepared just for you. </h1></main>
                    </div>
                </div>
            </div>
            <div id="bottom1">
                <figure><img src={Slider1} alt="" /></figure>
            </div>

            <div id="bottom2">
                <div className="wrapper">
                    <div className="btm2_con">
                        {boxes.map(item => (
                            <Box item={item} key={item.id} />
                        ))}
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Home