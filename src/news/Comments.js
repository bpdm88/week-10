import React from "react";
import axios from "../axios";

class Comments extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loaded: false,
            comments: [],
        };
    }

    componentDidMount() {
        let { id } = this.props;

        axios.get(`/articles/${id}/comments`).then(({ data }) => {
            this.setState({
                loaded: true,
                comments: data.data,
            });
        });
    }

    render() {
        let { comments, loaded } = this.state;

        return !loaded ? (
            <p>Loading ...</p>
        ) : (
            <>
                <ul className="list-group">
                    {comments.map((comment) => (
                        <li key={comment.id} className="list group-item">
                            {comment.comment}
                        </li>
                    ))}
                </ul>
            </>
        );
    }
}

export default Comments;
