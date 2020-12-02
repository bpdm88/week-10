import React from "react";
import axios from "../axios";

class CreateArticle extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "",
            content: "",
            tags: [],
        };

        this.handleTitle = this.handleTitle.bind(this);
        this.handleContent = this.handleContent.bind(this);
        this.handleTags = this.handleTags.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleTitle(event) {
        this.setState({ title: event.currentTarget.value });
    }

    handleContent(event) {
        this.setState({ content: event.currentTarget.value });
    }

    handleTags(event) {
        this.setState({ tags: event.currentTarget.value });
    }
    handleSubmit(event) {
        event.preventDefault();

        let { title, content, tags } = this.state;

        axios
            .post("/articles", {
                title: title,
                content: content,
                tags: tags.split(", "),
            })
            .then(({ data }) => {
                this.setState({
                    title: "",
                    content: "",
                    tags: "",
                });
            });
    }

    render() {
        let { title, content, tags } = this.state;
        return (
            <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                    <label htmlFor="title">Title</label>
                    <input
                        className="form-control"
                        id="title"
                        name="title"
                        type="text"
                        onChange={this.handleTitle}
                        value={title}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="content">Content</label>
                    <input
                        className="form-control"
                        id="content"
                        name="content"
                        type="text"
                        onChange={this.handleContent}
                        value={content}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="tags">Tags</label>
                    <input
                        className="form-control"
                        id="tags"
                        name="tags"
                        type="text"
                        onChange={this.handleTags}
                        value={tags}
                    />
                </div>
                <button className="btn btn-primary">Submit</button>
            </form>
        );
    }
}
export default CreateArticle;
