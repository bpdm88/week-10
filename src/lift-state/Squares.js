import React from "react";
import Square from "./Square";

class Squares extends React.Component {
    constructor(props) {
        super(props);

        this.state = { selected: 1 };
    }

    render() {
        return (
            <section>
                <Square
                    selected={this.state.selected === 1}
                    handleClick={() => this.setState({ selected: 1 })}
                    colour={this.props.colour}
                />
                <Square
                    selected={this.state.selected === 2}
                    handleClick={() => this.setState({ selected: 2 })}
                    colour={this.props.colour}
                />
            </section>
        );
    }
}
export default Squares;
