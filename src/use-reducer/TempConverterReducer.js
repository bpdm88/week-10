import { useReducer } from "react";

//state

const initialState = {
    celcius: 0,
    farenheit: 32,
};

// reducer

const reducer = (state, action) => {
    switch (action.type) {
        case "CHANGE_CELCIUS":
            return {
                ...state,
                celcius: action.value,
                farenheit: action.value * 1.8 + 32,
            };
        case "CHANGE_FARENHEIT":
            return {
                ...state,
                farenheit: action.value,
                celcius: (action.value - 32) / 1.8,
            };
        default:
            return state;
    }
};

// component

const TempConverterReducer = () => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const { celcius, farenheit } = state;

    const updateCelcius = (event) =>
        dispatch({
            type: "CHANGE_CELCIUS",
            value: event.currentTarget.value,
        });

    const updateFarenheit = (event) =>
        dispatch({
            type: "CHANGE_FARENHEIT",
            value: event.currentTarget.value,
        });

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

export default TempConverterReducer;
