import { useReducer } from "react";

// State
const initialState = {
    clicked: false,
};

//Reducer

const reducer = (state, action) => {
    switch (action.type) {
        case "CLICKED":
            return { ...state, clicked: true };
        default:
            return state;
    }
};

//Component with JSX

const ClickedReducer = () => {
    // starts with what we pass it but then react knows what state is from there onwards
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <p onClick={() => dispatch({ type: "CLICKED" })}>
            {state.clicked ? "Clicked" : "Not Clicked"}
        </p>
    );
};
export default ClickedReducer;
