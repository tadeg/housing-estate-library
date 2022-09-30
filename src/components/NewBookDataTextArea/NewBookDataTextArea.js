import React from "react";
import PropTypes from "prop-types";

const NewBookDataTextArea = (props) => {
   
    const { name, label, type, value, className, onChange } = props;


    return (
        <div>

        <label htmlFor={name}>{label}: </label>
        <textarea 
            id={name}
            name={name}
            type={type}
            value={value}
            className={className}
            onChange={onChange}
        />
        </div>
    );
}

NewBookDataTextArea.propTypes = {
    label: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    value: PropTypes.string,
    type: PropTypes.string,
    className: PropTypes.string,
    onChange: PropTypes.func
}

export default NewBookDataTextArea;


