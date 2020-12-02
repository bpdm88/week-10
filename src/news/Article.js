import React from "react";
import axios from "../axios";
import Tags from "../news/Tags";
import Comments from "../news/Comments";

class Article extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loaded: false,
            article: {},
        };
    }

    componentDidMount() {
        axios.get("/articles/" + this.props.id).then(({ data }) => {
            this.setState({
                loaded: true,
                article: data.data,
            });
        });
    }

    render() {
        let { article, loaded } = this.state;

        return !loaded ? (
            <p>Loading ...</p>
        ) : (
            <>
                <h2>{article.title}</h2>
                <p>{article.content}</p>
                <Tags tags={article.tags} />
                <h2>Comments</h2>
                <Comments id={article.id} />
            </>
        );
    }
}
export default Article;
