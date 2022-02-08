import React, {useState, useEffect} from "react";
import {Link} from "react-router-dom";
import axios from "axios";


const Article = (props) => {
    const [authorName, setAuthorName] = useState("");
    const [title, setTitle] = useState("");
    const [article, setArticle] = useState("");
    const [fileName, setFileName] = useState("");

    useEffect(() => {
        //REQUEST THE DATA FROM A SERVER AND SET DATA TO ARTICLES ARRAY
        axios
            .get(`/Articles/${props.match.params.id}`)
            .then((response) => [
                setAuthorName(response.data.authorName),
                setTitle(response.data.title),
                setArticle(response.data.article),
                setFileName(response.data.articleImage)
            ])

            .catch((error) => console.log(error));
    }, []);

    return (
        <>
            <>
            <img 
                src={`/uploads/${fileName}`} 
                alt="..." 
                style={{ margin: "0 auto", width: "40%", display: "flex"}}
                />
                <h2>{title} </h2>
                <p>{article} </p>
                <p style={{fontWeight: "900"}}> 
                    <small style={{fontSize: "10px"}} className="badge badge-secondary"> 
                        author 
                    </small>{" "}
                    {authorName}
                </p>

                <div className="row mb-5">
                    <Link to = "/" className="btn btn-outline-secondary mr-4" >
                        Back to main
                    </Link>
                </div>
            </>
        </>
    )
}

export default Article;