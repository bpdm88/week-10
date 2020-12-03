import { useState } from "react";

const StepCounter = ({ max, step }) => {
    const [steps, setSteps] = useState(0);

    const increase = () => setSteps(steps + (steps < max ? step : 0));

    const decrease = () => setSteps(steps - (steps > 0 ? step : 0));

    return (
        <div>
            <p>{steps}</p>
            <button onClick={increase}>Increase</button>
            <button onClick={decrease}>Decrease</button>
        </div>
    );
};
export default StepCounter;
