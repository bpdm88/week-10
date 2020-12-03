import { useState } from "react";

const PasswordStrength = () => {
    const [input, setInput] = useState("");

    const handleUpdate = (event) => setInput(event.currentTarget.value);

    const strength = () => {
        if (input.length >= 16) {
            return "green";
        } else if (input.length >= 9) {
            return "orange";
        } else if (input.length > 0) {
            return "red";
        } else return "";
    };

    return (
        <form className="form-group">
            <label>Password Strength:</label>
            <input
                className="form-control"
                onChange={handleUpdate}
                value={input}
                style={{ background: strength() }}
            />
        </form>
    );
};
export default PasswordStrength;
