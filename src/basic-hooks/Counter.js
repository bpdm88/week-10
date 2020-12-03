import { useState } from "react";

const Counter = ({ initial, max }) => {
    const [count, setcount] = useState(initial);

    const increase = () => setcount(count + (count < max ? 1 : 0));

    const decrease = () => setcount(count - (count > 0 ? 1 : 0));

    return (
        <div>
            <p>{count}</p>
            <button onClick={increase}>Increase</button>
            <button onClick={decrease}>Decrease</button>
        </div>
    );
};
export default Counter;
