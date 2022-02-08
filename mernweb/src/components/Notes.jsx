import React, {useState} from 'react';

const Notes = () => {

    const [notes, setNotes] = useState({
        title : "",
        desc : "",
        upload : ""
    });

    // Handle Inputs
    const handleChange = (event) =>{
        let title = event.target.title;
        let value = event.target.value;

        setNotes({...notes, [title]:value});
    }

    // Handle Submit

    const handleSubmit = async(event)=>{
        event.preventDefault();
        // Object Destructuring
        // Store Object data into Variables
        const {title, desc, upload} = notes;
        try{

            // It is submitted on port 3000 by default
            //It is in FrontEnd but it needs to be submitted to the BackEnd(3001), so we need Proxy
            const res = await fetch('/notes', {
                method: "POST",
                headers : {
                    "Content-Type" : "application/json" 
                },
                body : JSON.stringify({
                    title, desc, upload
                })
            })
            console.log(res.status)
            if(res.status === 400 || !res){
                window.alert("File couldn't be uploaded, please try again!!!")
            }else{
                // Server must be started for Proxy to work
                // Now Try again
                window.alert("File uploaded successfully");
                setNotes({
                    title : "",
                    desc : "",
                    upload : ""
                })
            }
        }catch(error){
            console.log(error);

        }
    }


    return (
        <div>
            <section id='notes'>
                <div className="container my-5 py-5">
                    <div className="row mb-5">
                        <div className="col-12">
                            <h3 className="fs-5 text-center mb-0">Notes</h3>
                            <h1 className='display-6 text-center mb-4'>Have some <b>interrsting stuffs to share? </b></h1>
                            <hr className='w-25 mx-auto' />
                        </div>
                    </div>

                    <div className='row'>
                        <div className='col-md-6'>
                            <img src="/assets/about1.jpg" alt="notes" className="w-75" />
                        </div>

                        <div className='col-md-6'>
                            <form onSubmit={handleSubmit} method='POST'>
                                <div className='mb-3'>
                                    <label for="name" className='form-label'>
                                        Title of the notes
                                    </label>
                                    
                                    <input type='text'
                                    className='form-control'
                                    id='title'
                                    placeholder='Artificial Intelligence Architecture'
                                    title='name'
                                    value= {notes.name}
                                    onChange={handleChange}
                                    />                                    
                                </div>

                                <div className='mb-3'>
                                    <label for="exampleFormControlInput1" className='form-label'>
                                        Description
                                    </label>
                                    <input
                                        type="text"
                                        className='form-control'
                                        id='exampleFormControlInput1'
                                        placeholder='This is an arhitectural diagram that signifies how the Artificial Intelligence works...'
                                        desc='email'
                                        value= {notes.email}
                                        onChange={handleChange}
                                    />
                                </div>

                                <div className='mb-3'>
                                    <label for="exampleFormControlTextarea1" className='form-label'>
                                        Upload file
                                    </label>
                                    <textarea
                                        className='form-control'
                                        id='exampleFormControlTextarea1'
                                        rows="5"
                                        upload='message'
                                        value= {notes.message}
                                        onChange={handleChange}
                                        >
                                    </textarea>
                                    
                                </div>
                                <button type='submit' className='btn btn-outline-primary rounded-pill px-4'>
                                    Upload your notes 
                                        <i className='fa fa-paper-plane ms-2'>

                                        </i>
                                </button>

                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Notes;