import { useState } from "react";

const CatchMeIfYouCan = ({ jump }) => {
    const [margin, setMargin] = useState(0);

    const moveButton = () => setMargin(margin + 100);

    return (
        <button onClick={moveButton} style={{ marginTop: margin }}>
            JUMP!
        </button>
    );
};
export default CatchMeIfYouCan;
