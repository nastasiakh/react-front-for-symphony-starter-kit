import React from 'react';
import "../../styles/app.css";


function Textarea({label, placeholder, value, name, changeAction}) {

    return (
        <div className="form_group field mb-2">
            <textarea className="form_field" placeholder={placeholder} name={name} id={name} required
                   onChange={changeAction} value={value} style={{height: '50px'}}/>
            <label htmlFor={label} className="form_label">{label}</label>
        </div>
    );
}

export default Textarea;
