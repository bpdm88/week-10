import { useState } from "react";

const ToggleText = ({ initial, alternate }) => {
    const [word, setWord] = useState(false);

    const toggle = () => setWord(!word);

    let newWord = word ? initial : alternate;

    return (
        <div>
            <p>{newWord}</p>
            <button onClick={toggle}>Click</button>
        </div>
    );
};

export default ToggleText;
