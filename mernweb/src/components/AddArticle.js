import React, { useState } from "react";
import axios from "axios";

const AddArticle = () => {
    const [title, setTitle] = useState("");
    const [article, setArticle] = useState("");
    const [authorname, setAuthorname] = useState("");
    const [message, setMessage] = useState("");
    const [fileName, setFileName] = useState("");

    const onChangeFile = e => {
        setFileName(e.target.files[0]);
    }

    const changeOnClick = (e) => {
        e.preventDefault();

        const formData = new FormData();

        formData.append("title", title);
        formData.append("article", article);
        formData.append("authorname", authorname);
        formData.append("articleImage", fileName);

        setTitle("");
        setArticle("");
        setAuthorname("");

        axios
            .post("/articles/add", formData)
            .then((res) => setMessage(res.data))
            .catch((err) => {
                console.log(err);
            });
    };

    return (
        <>
            <div className="container">
                <h1>Add Notes</h1><br/>
                <span className="message">{message} </span>
                <form onSubmit={changeOnClick} encType="multipart/form-data">

                    <div className="form-group">
                        <label htmlFor="authorname">Faculty Name</label>
                        <input
                            type="text"
                            value = {authorname}
                            onChange = {(e) => setAuthorname(e.target.value)}
                            className="form-control"
                            placeholder="Faculty Name"
                        />
                    </div><br/>

                    <div className="form-group">
                        <label htmlFor="title">Title of Notes</label>
                        <input
                            type="text"
                            value = {title}
                            onChange = {(e) => setTitle(e.target.value)}
                            className="form-control"
                            placeholder="Title of Notes"
                        /><br/>
                    </div>

                    <div className="form-group">
                        <label htmlFor="article">Description of the Notes</label>
                        <textarea
                            value={article}
                            onChange={(e) => setArticle(e.target.value)}
                            className="form-control"
                            rows = "4"
                        ></textarea>
                    </div><br/><br/>

                    <div className="form-group">
                        <label htmlFor="file">Choose notes</label>
                        <input 
                            type="file" 
                            filename = "articleImage"
                            className="form-control-file"
                            onChange={onChangeFile}
                        />
                    </div><br/>

                    <button type="submit" className="btn btn-primary">
                        Post Notes
                    </button>

                    <div></div><br/><br/><br/>
                </form>
            </div>
        </>
    );
};

export default AddArticle;