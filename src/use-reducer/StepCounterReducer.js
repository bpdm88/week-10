import { useReducer } from "react";

//state

const initialState = {
    steps: 0,
};

//Reducer

const reducer = (state, action) => {
    switch (action.type) {
        case "INCREASE":
            return {
                ...state,
                steps:
                    state.steps + (state.steps < action.max ? action.step : 0),
            };
        case "DECREASE":
            return {
                ...state,
                steps: state.steps - (state.steps > 0 ? action.step : 0),
            };
        default:
            return state;
    }
};

//Component with JSX

const StepCounterReducer = ({ max, step }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const { steps } = state;

    return (
        <div>
            <p>{steps}</p>
            <button
                onClick={() =>
                    dispatch({ type: "INCREASE", step: step, max: max })
                }
            >
                Increase
            </button>
            <button onClick={() => dispatch({ type: "DECREASE", step: step })}>
                Decrease
            </button>
        </div>
    );
};
export default StepCounterReducer;
