import React from 'react'

const ShowCase = () => {
    return (
        <section className="bg-dark text-light p-5 p-lg-0 text-center text-sm-start">
            <div className="container">
                <div className='d-sm-flex align-items-center justify-content-between'>
                    <div>
                        <h1>Welcome to a <span className="text-warning">booking page</span></h1>
                        <p className="lead my-4">
                            <a className='btn btn-primary btn-lg rounded-1' href="#selectionBox">Выбирайте учебную комнату</a> 
                        </p>
                    </div>
                    <img className='img-fluid w-50 d-none d-sm-block' src="https://raw.githubusercontent.com/bradtraversy/bootstrap-bootcamp-website/7656406f5e7b5cb1ac5879df8fd93f1182e215bf/img/showcase.svg" alt="" />

                </div>
            </div>
        </section>
    )
}

export default ShowCase