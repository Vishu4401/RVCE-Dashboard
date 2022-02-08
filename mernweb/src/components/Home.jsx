import React from 'react';
import About from './About';
// import Article from './Article';
import Contact from './Contact';
import Services from './Services';
// import { NavLink } from 'react-router-dom';

const Home = () => {
    return(
        <div>
            <section id='home'>
                <div className='container'>
                    <div className='row justify-content-center'>
                        <div className='col-md-8 mt-5'>
                            <h1 className='display-4 fw-bolder mb-4 text-center text-white'> Create, Curate, Teach. That’s the way we share</h1>
                            <p className='lead text-center fs-4 mb-5 text-white'>"We obsess over the challenges of content 
                            organization. We're discovering that digital methodology which is essential to make a content useful. 
                            You can create, Curate and Share the notes with the Students"</p>
                            <p className='lead text-center fs-4 mb-5 text-white'>That's the way we deal,
                            let us show you</p>
{/*                             
                            <div className='buttons d-flex justify-content-center'>
                                <NavLink to = "/contact" className= "btn btn-light me-4 rounded-pill px-4 py-2">Contact Us</NavLink>
                                <NavLink to = "/service" className= "btn btn-light me-4 rounded-pill px-4 py-2">Our Features</NavLink>
                            </div> */}
                        
                        </div>
                    </div>
                </div>
            </section>
            <About/>
            <Services/>
            <Contact/>
            {/* <Article/> */}
        </div>
    )
}

export default Home;