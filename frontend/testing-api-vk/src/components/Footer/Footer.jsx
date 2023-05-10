import React from 'react'
import 'bootstrap-icons/font/bootstrap-icons.css';
import "./Footer.css"
const Footer = () => {
    return (
        <footer className='p-3 bg-dark text-white text-center footer'>
            <div className="container">
                <p className="mt-2 lead">
                    Toroev Kanatbek <br />
                    2023, Saint-Petersburg
                </p>
                <a href="#" className="p-3 arrow-scroll">
                    <i className="bi bi-arrow-up-circle h1"></i>
                </a>
            </div>
        </footer>
    )
}

export default Footer