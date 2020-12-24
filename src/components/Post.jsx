import React, {useState, useEffect} from "react";
import {Link} from "react-router-dom";
import axios from "axios";

const Post = (props) => {
    const [card, setcard] = useState([]);
    const id = props.match.params.post_id;
    useEffect(() => {
        (async () => {
            const res = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
            setcard(res.data);
        })();
    }, []);
    return (
        <div className="card">
            <div className="card-body">
                <Link to={`${id}`}>
                    <h5 className="card-title">{id}</h5>
                </Link>
                <h6 className="card-subtitle mb-2 text-muted">{card.title}</h6>
                <p className="card-text">{card.body}</p>
            </div>
        </div>
    );
};

export default Post;
