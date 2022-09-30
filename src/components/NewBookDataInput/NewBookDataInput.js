import React from 'react';
import PropTypes from "prop-types";

const NewBookDataInput = (props) => {

    const { type, name, label, value, className, onChange, error } = props;

    return (
        <div>
            <label htmlFor={name}>
                {label} {type !== "submit" ? ":" : ""}
                </label>
            <input 
                type={type}
                id={name}
                name={name}
                value={value}
                className={className}
                onChange={onChange}
            />
            {error && (
                <small className="alert alert-danger form-text text-muted">
                    {error}
                </small>
            )}
        </div>
    );
}

NewBookDataInput.propTypes = {
    label: PropTypes.string,
    name: PropTypes.string,
    type: PropTypes.string,
    value: PropTypes.string,
    className: PropTypes.string,
    onChange: PropTypes.func,
    error: PropTypes.string
};

export default NewBookDataInput;