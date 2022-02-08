import React from 'react';

const About = () => {
    return(
        <div>
            <section id = "about">
                <div className='container my-5 py-5'>
                    <div className='row'>
                        <div className='col-md-6'>
                            <img src = "/assets/about1.jpg" alt='About' className='w-75 mt-5'/>
                        </div>
                        <div className='col-md-6'>
                            <h3 className='fs-5 mb-0'>About Us</h3>
                            <h1 className='display-6 mb-2'>Who <b>We</b> Are</h1>
                            <hr className='w-50'/>
                            <p className='lead mb-4'>We the operators of NoteStore help the students to get access to the notes created by the faculty within an organization.
                            </p>
                            <button className='btn btn-primary rounded-pill px-4 
                                py-2'>Get started</button>

                            <button className='btn btn-outline-primary rounded-pill px-4 
                                py-2 ms-2'>Contact Us</button>
                        </div>

                    </div>
                </div>
            </section>
        </div>
    )
}

export default About;