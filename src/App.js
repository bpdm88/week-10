import Squares from "./lift-state/Squares";
import SignUp from "./lift-state/SignUp";
import Button from "./data-flow/Button";
import Form from "./data-flow/Form";

function App() {
    return (
        <>
            <Squares colour="pink" />
            <SignUp minimumLength={12} />
            <Button handleUpdate={(count) => console.log(count)} />
            <Form handleSubmit={(value) => console.log(value)} />
        </>
    );
}

export default App;
