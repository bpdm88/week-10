import { useState } from "react";

const TempConverter = () => {
    const [celcius, setCelcius] = useState(0);
    const [farenheit, setFarenheit] = useState(32);

    const updateCelcius = (event) => {
        const celcius = event.currentTarget.value;
        setCelcius(celcius);

        let farenheit = celcius * 1.8 + 32;
        setFarenheit(farenheit);
    };

    const updateFarenheit = (event) => {
        const farenheit = event.currentTarget.value;
        setFarenheit(farenheit);

        let celcius = (farenheit - 32) / 1.8;
        setCelcius(celcius);
    };

    return (
        <form className="form-group">
            <label for="clecius">Celcius</label>
            <input
                className="form-control"
                id="celcius"
                onChange={updateCelcius}
                value={celcius}
            ></input>
            <label for="farenheit">Farenheit</label>
            <input
                className="form-control"
                id="farenheit"
                onChange={updateFarenheit}
                value={farenheit}
            ></input>
        </form>
    );
};

export default TempConverter;
