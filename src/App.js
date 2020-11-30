import Squares from "./lift-state/Squares";
import SignUp from "./lift-state/SignUp";

function App() {
    return (
        <>
            <Squares colour="pink" />
            <SignUp minimumLength={12} />
        </>
    );
}

export default App;
