import React, { useState, useEffect } from "react";
import axios from "axios";

const EditArticle = (props) => {
    const [title, setTitle] = useState("");
    const [article, setArticle] = useState("");
    const [authorname, setAuthorName] = useState("");
    const [message, setMessage] = useState("");
    const [fileName, setFileName] = useState("");
    
    const onChangeFile = (e) => {
        setFileName(e.target.files[0]);
    };
    const changeOnClick = (e) => {
        e.preventDefault();


        const formData = new FormData();

        formData.append("title", title);
        formData.append("article", article);
        formData.append("authorname", authorname);
        formData.append("articleImage", fileName);


        axios
            .put(`/articles/update/${props.match.params.id}`, formData)
            .then((res) => setMessage(res,formData))
            .catch((err) => {
                console.log(err);
            });
    };

    useEffect(() => {
        axios
            .get(`/articles/${props.match.params.id}`)
            .then((res) => [
                setTitle(res.data.title),
                setArticle(res.data.article),
                setAuthorName(res.data.authorname),
                setFileName(res.data.articleImage)
            ])
            .catch((err) => {
                console.log(err);
            });
    }, [`${props.match.params.id}`]);
    return (
        <>
            <div className="container">
                <h1>Edit Notes</h1>
                <span className="message">{message} </span>
                <form onSubmit={changeOnClick} encType="multipart/form-data">
                    <div className="form-group">
                        <label htmlFor="authorname">Author Name</label>
                        <input
                            type="text"
                            value={authorname}
                            className="form-control"
                            placeholder="Author Name"
                            onChange={(e) => setAuthorName(e.target.value)}                            
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="title">Title</label>
                        <input
                            type="text"
                            onChange = {(e) => setTitle(e.target.value)}
                            value={title}
                            className="form-control"
                            placeholder="title"
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="article">Article</label>
                        <textarea
                            onChange={(e) => setArticle(e.target.value)}
                            value={article}
                            className="form-control"
                            rows="3">
                        </textarea>
                    </div>

                    <div className="form-group">
                        <label htmlFor="file">Choose Article image</label>
                        <input
                            type="file"
                            filename = "articleImage"
                            className = "form-control-file"
                            onChange = {onChangeFile}
                        />
                    </div>

                    <button type="submit" className="btn btn-primary">Update Article</button>
                </form>
            </div>


        </>
    );
};

export default EditArticle;

//MAIN CONTAINER
// const EditArticleContainer = styled.div`
//     margin: 
// `