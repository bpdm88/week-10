import React from "react";

class Button extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            count: 0,
        };

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        let { handleUpdate } = this.props;
        let count = this.state.count + 1;
        this.setState({ count: count });
        handleUpdate(count);
    }

    render() {
        return (
            <button onClick={this.handleClick} class="btn btn-success">
                Click
            </button>
        );
    }
}
export default Button;
