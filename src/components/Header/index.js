import React from 'react'

const Header = () => {
    return (
        <header className="navbar container-fluid bg-black">
            <div className='container d-flex flex-row-reverse justify-content-between'>
                <button
                    className='navbar-toggler text-white'
                    type='button'
                    data-bs-toggle="collapse"
                    data-bs-target="#navbar"
                    aria-controls='navbar'
                    aria-expanded='false'
                    aria-label='Toggle Navigation'
                >
                    <i className="bi bi-list" />
                </button>
            </div>
        </header >
    )
}
export default Header
