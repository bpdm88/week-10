import { useState } from "react";

const List = () => {
    const [input, setInput] = useState("");
    const [arr, setArr] = useState([]);

    const handleChange = (event) => setInput(event.currentTarget.value);

    const handleSubmit = (event) => {
        event.preventDefault();

        let item = input;

        setArr([...arr, item]);
    };

    return (
        <form className="form-group" onSubmit={handleSubmit}>
            <label htmlFor="list-item">List Item</label>
            <input
                className="form-control"
                id="list-item"
                onChange={handleChange}
                value={input}
            />
            <button className="btn btn-success">ADD TO LIST</button>
            <ul className="list-group mt-4">
                {arr.map((item, i) => (
                    <li className="list-group-item" key={i}>
                        {item}
                    </li>
                ))}
            </ul>
        </form>
    );
};
export default List;
