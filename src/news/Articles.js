import React from "react";
import axios from "../axios";
import Tags from "./Tags";
import { Link } from "react-router-dom";

class Articles extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loaded: false,
            articles: [],
        };
    }

    componentDidMount() {
        axios.get("/articles").then(({ data }) => {
            this.setState({
                loaded: true,
                articles: data.data,
            });
        });
    }

    render() {
        let { articles, loaded } = this.state;

        return !loaded ? (
            <p>Loading ...</p>
        ) : (
            <>
                <h2>Articles</h2>
                <ul className="list-group">
                    {articles.map((article) => (
                        <li key={article.id} className="list-group-item">
                            <Link to={"/news/" + article.id}>
                                {article.title}
                                <Tags tags={article.tags} />
                            </Link>
                        </li>
                    ))}
                </ul>
            </>
        );
    }
}
export default Articles;
