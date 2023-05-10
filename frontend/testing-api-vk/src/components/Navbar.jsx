import React from 'react'

const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
                <a href="/" className='navbar-brand'>navbar</a> 
                <button className="navbar-toggler" type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbar">
                    <span className='navbar-toggler-icon'></span>
                </button>
            </nav>
        </div>
    )
}

export default Navbar