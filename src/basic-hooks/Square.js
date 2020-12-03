import { useState } from "react";

const Square = ({ colour }) => {
    const [clicked, setClicked] = useState(false);

    const update = () => setClicked(!clicked);

    let newColour = clicked ? colour : "green";

    return (
        <div
            onClick={update}
            style={{ background: newColour, width: 200, height: 200 }}
        ></div>
    );
};

export default Square;
