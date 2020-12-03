import { useState } from "react";

const Clicked = () => {
    const [clicked, setClicked] = useState(false);

    const update = () => setClicked(true);

    return <p onClick={update}>{clicked ? "Clicked" : "Not Clicked"}</p>;
};

export default Clicked;
