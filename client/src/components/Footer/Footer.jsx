import React from 'react'
import './Footer.scss'
import { Link } from 'react-router-dom'
import fb from '../../images/fb-icon.png'
import twitter from '../../images/twitter-icon.png'
function Footer() {

    const newsLetter = (e) => {
        e.preventDefault();
        console.log("ghello");
    }


    return (
        <footer>
            <div className="wrapper">
                <div className="footer_con">
                    <div className="footer_nav">

                        <Link to="/"> Our Story</Link>
                        <Link to="/"> Our Products</Link>
                        <Link to="/"> Stores</Link>
                        <Link to="/"> Online Order</Link>
                        <Link to="/"> Franchise</Link>
                        <Link to="/"> Contact Us</Link>
                    </div>
                    <div className="social_media">
                        <h5>Get in Touch</h5>
                        <div className='links'>
                            <a href="https://www.facebook.com/" target='_blank'><img src={fb} alt='Facebook' /></a>
                            <a href="https://www.instagram.com/" target='_blank'><img src={twitter} alt='Twitter' /></a>
                        </div>
                    </div>

                    <div className="copyright_con">
                        <div className="newsletter">
                            <h5>Newsletter</h5>
                            <form onSubmit={newsLetter}>
                                <input type='text' placeholder='your@email.com' />
                                <button type='submit'>&rsaquo;</button>
                            </form>

                        </div>
                        <div className="copyright">
                            &copy; 2023 JK Donut Delights
                        </div>

                    </div>

                </div>
            </div>

        </footer>
    )
}

export default Footer