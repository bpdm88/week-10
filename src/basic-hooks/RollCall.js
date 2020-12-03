import { useState } from "react";

const RollCall = ({ names }) => {
    const [person, setPerson] = useState(0);

    const next = () => setPerson((person + 1) % names.length);

    return (
        <div>
            <p>{names[person]}</p>
            <button onClick={next}>Next Name</button>
        </div>
    );
};
export default RollCall;
