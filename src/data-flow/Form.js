import React from "react";

class Form extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name: "",
            email: "",
        };

        this.handleChangeName = this.handleChangeName.bind(this);
        this.handleChangeEmail = this.handleChangeEmail.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChangeName(event) {
        this.setState({ name: event.currentTarget.value });
    }

    handleChangeEmail(event) {
        this.setState({ email: event.currentTarget.value });
    }

    handleSubmit(e) {
        e.preventDefault();
        let { handleSubmit } = this.props;
        let { name, email } = this.state;
        handleSubmit({ name, email }); // key and variable are named the same so ablle to use in this way. Alternativiely could do a copy of {...this.state}
        this.setState({ name: "", email: "" });
    }

    render() {
        let { name, email } = this.state;
        return (
            <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input
                        className="form-control"
                        id="name"
                        name="name"
                        type="text"
                        onChange={this.handleChangeName}
                        value={name}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                        className="form-control"
                        id="email"
                        name="email"
                        type="email"
                        onChange={this.handleChangeEmail}
                        value={email}
                    />
                </div>
                <button className="btn btn-primary">Submit</button>
            </form>
        );
    }
}

export default Form;
