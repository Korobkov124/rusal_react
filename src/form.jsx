import React from "react";
import FocusInput from './focus_input';

function Form(){
    return (
        <div>
            <h2>Enter Form</h2>
            <FocusInput />
            <button onClick={() => alert('Форма отправлена')}>Enter</button>
        </div>
    );
}

export default Form;