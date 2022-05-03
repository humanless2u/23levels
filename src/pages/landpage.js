import React from 'react'

export default function Landpage() {
    return (
        <>
            {/* start header */}
            <header className="header p-3 position-absolute start-0 top-0 end-0 bg-black">
                <div className="d-flex justify-content-between align-itens-center">
                    <a href='/' className="text-decoration-none text-white fs-5 fw-bold">23Levels</a>
                    <div>
                        <button
                            className='navbar-toggler text-white'
                            type='button'
                            data-bs-toggle="collapse"
                            data-bs-target="#navbar"
                            aria-controls='navbar'
                            aria-expanded='false'
                            aria-label='Toggle Navigation'
                        >
                            <i class="bi bi-list" />
                        </button>
                    </div>
                </div>
            </header>
            {/* end header */}


            <nav className='collapse navbar-collapse dropdown dropdown-nav' id='navbar' style={{
                position: "fixed",
                top: "0",
                left: "0",
                bottom: "0",
                right: "0",
                backgroundColor: "black",
                zindex: "2"
            }} >
                <div className='container-fluid'>
                    <div className='row align-items-start'>
                        <div className=' col-12 col-sm-4'>
                            <a href='#' className='row text-decoration-none'>
                                <div className=' col-2 col-sm-12 mb-4'>
                                    <img
                                        src='https://picsum.photos/553/746'
                                        className='img-fluid'
                                        alt='image'
                                        loading='lazy'
                                        with="553"
                                        height="746" />
                                </div>
                                <div className='col-10 text-color-white' s >
                                    <h3>Amazing Beat</h3>
                                    <p>Find out more about our amazing beats</p>
                                    <p>Learn More <i bi-arrow-rigth-short></i> </p>
                                </div>
                            </a>
                        </div>
                        <div className=' col-12 col-sm-4'>
                            <a href='#' className='row text-decoration-none'>
                                <div className=' col-2 col-sm-12 mb-4'>
                                    <img
                                        src='https://picsum.photos/553/746'
                                        className='img-fluid'
                                        alt='image'
                                        loading='lazy'
                                        with="553"
                                        height="746" />
                                </div>
                                <div className='col-10'>
                                    <h3>Amazing Beat</h3>
                                    <p>Find out more about our amazing beats</p>
                                    <p>Learn More <i bi-arrow-rigth-short></i> </p>
                                </div>
                            </a>
                        </div>
                        <div className=' col-12 col-sm-4'>
                            <a href='#' className='row text-decoration-none'>
                                <div className=' col-2 col-sm-12 mb-4'>
                                    <img
                                        src='https://picsum.photos/553/746'
                                        className='img-fluid'
                                        alt='image'
                                        loading='lazy'
                                        with="553"
                                        height="746" />
                                </div>
                                <div className='col-10'>
                                    <h3>Amazing Beat</h3>
                                    <p>Find out more about our amazing beats</p>
                                    <p>Learn More <i class="bi bi-arrow-right-short"></i></p>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>

                <div className='p-3 position-absolute top-0 end-0'>
                    <button
                        className='navbar-toggler text-white'
                        type='button'
                        data-bs-toggle="collapse"
                        data-bs-target="#navbar"
                        aria-controls='navbar'
                        aria-expanded='false'
                        aria-label='Toggle Navigation'
                    >
                        <i class="bi bi-x" />
                    </button>
                </div>
            </nav>


        </>
    );
}