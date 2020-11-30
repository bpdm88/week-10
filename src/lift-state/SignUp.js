import React from "react";
import Password from "./Password";

class SignUp extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            password: "",
            confirmPassword: "",
        };
    }

    render() {
        let currentLength = this.state.password.length;

        let { minimumLength } = this.props;
        let { password } = this.state.password;
        let { confirmPassword } = this.state.confirmPassword;

        let isValid =
            currentLength > minimumLength && password === confirmPassword
                ? true
                : false;

        return (
            <section>
                <Password
                    label="Password"
                    handleChange={(event) =>
                        this.setState({
                            password: event.currentTarget.value,
                        })
                    }
                    value={this.state.password}
                    validity={isValid}
                />
                <Password
                    label="Confirm Password"
                    handleChange={(event) =>
                        this.setState({
                            confirmPassword: event.currentTarget.value,
                        })
                    }
                    value={this.state.confirmPassword}
                    validity={isValid}
                />
            </section>
        );
    }
}
export default SignUp;
