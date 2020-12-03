import Squares from "./lift-state/Squares";
import SignUp from "./lift-state/SignUp";
import Button from "./data-flow/Button";
import Form from "./data-flow/Form";
import Clicked from "./basic-hooks/Clicked";
import Square from "./basic-hooks/Square";
import ToggleText from "./basic-hooks/ToggleText";
import Counter from "./basic-hooks/Counter";
import StepCounter from "./basic-hooks/StepCounter";
import CatchMeIfYouCan from "./basic-hooks/CatchMeIfYouCan";
import RollCall from "./basic-hooks/RollCall";
import PasswordStrength from "./basic-hooks/PasswordStrength";
import TempConverter from "./basic-hooks/TempConverter";
import List from "./basic-hooks/List";

const Challenges = () => (
    <>
        <Squares colour="pink" />
        <SignUp minimumLength={12} />
        <Button handleUpdate={(count) => console.log(count)} />
        <Form handleSubmit={(value) => console.log(value)} />
        <Clicked />
        <Square colour="hotpink" />
        <ToggleText initial="Hello" alternate="World" />
        <Counter initial={50} max={100} />
        <StepCounter max={100} step={5} />
        <CatchMeIfYouCan jump={100} />
        <RollCall names={["Ben", "Josie", "James", "Tom", "bill"]} />
        <PasswordStrength />
        <TempConverter />
        <List />
    </>
);

export default Challenges;
