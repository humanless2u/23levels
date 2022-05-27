import React from 'react'

import Layout from '../components/Layout';
import Lead from '../components/Lead';
import Form from '../components/Form';



const Home = () => {
    return (
        <Layout >
            <div id='Home' className='container'>
                <div className="row d-flex justify-content-center align-items-center">
                    <div className="col-sm-12 col-md-6">
                        <Lead />
                    </div>
                    <div className="col-sm-12 col-md-6">
                        <Form />
                    </div>
                </div>
                <div className='row-sm-1 pt-sm-5 d-flex justify-content-center align-items-center fixed-bottom' >
                    <button className='btn'>
                        Explorar
                    </button>
                </div>
            </div>
        </Layout>
    );
}

export default Home