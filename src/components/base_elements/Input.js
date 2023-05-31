import React from 'react';
import "../../styles/app.css";


function Input({label, placeholder, value, name, changeAction}) {

    return (
        <div className="form_group field mb-2">
            <input type="text" className="form_field" placeholder={placeholder} name={name} id={name} required
                   onChange={changeAction} value={value}/>
            <label htmlFor={label} className="form_label">{label}</label>
        </div>
    );
}

export default Input;
