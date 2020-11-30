const Square = ({ selected, handleClick, colour }) => (
    <div
        onClick={handleClick}
        style={{
            background: selected ? colour : "blue",
            width: 200,
            height: 200,
        }}
    />
);

export default Square;
