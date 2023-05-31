import React from "react";
import "../../styles/app.css";

function Select({optionsArray, changeAction, value, label}) {

    return (
        <div className="d-flex flex-column form_select mb-2">
            <label className="mb-2">{label}</label>
            <select onChange={changeAction} value={value} id={label}>
                { optionsArray && optionsArray.map((option, value) =>
                    <option value={value}>{option}</option>
                )}
            </select>
        </div>
    );
}

export default Select;