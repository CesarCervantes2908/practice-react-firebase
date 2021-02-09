import React from 'react'

function Input({handleChange, mensaje}) {
    return (
        <input type="text" 
                       placeholder="Escribe tu mensaje" 
                       className="form-control"
                       onChange={handleChange}
                       value={mensaje}
                       />
    );
}

export default Input
