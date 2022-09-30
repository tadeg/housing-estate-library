import React from "react";
import PropTypes from "prop-types";


const NewBookDataSelect = (props) => {

    const { name, label, value, className, onChange, options } = props;

    return(

        <div>

        <label htmlFor={name}>{label}: </label>
        <select
            name={name}
            id={name}
            value={value}
            className={className}
            onChange={onChange}
        >
        {options.map((option, index) => (
            <option key={index} value={option.name}>
            {option.name}
            </option>
        ))}
            </select>
        </div>
    );
}



NewBookDataSelect.propTypes = {
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    value: PropTypes.string,
    className: PropTypes.string,
    onChange: PropTypes.func,
    options: PropTypes.array
};

export default NewBookDataSelect;
