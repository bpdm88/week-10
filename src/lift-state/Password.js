const Password = ({ label, handleChange, value, validity }) => (
    <div>
        <form class="form-group">
            <label>{label}</label>
            <input
                onChange={handleChange}
                value={value}
                className={
                    validity
                        ? "form-control is-valid"
                        : "form-control is-invalid"
                }
            ></input>
        </form>
    </div>
);

export default Password;
