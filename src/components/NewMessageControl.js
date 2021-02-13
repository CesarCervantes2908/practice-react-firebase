import React, {useState} from 'react';
//import Input from './Input';

function NewMessageControl({firebase, changeFetchDataControl}) {
    const [mensaje, setMensaje] = useState('');
    const handleChange = ({target})=>{
        setMensaje(target.value);
    };
    const submitMessage = ()=>{
        if(!mensaje) return alert("Agregue un mensaje");
        let newMessage = {
            id: Date.now(),
            texto: mensaje
        };
        firebase.database().ref(`/messages/${newMessage.id}`).set(newMessage);
        changeFetchDataControl();
        setMensaje('');
    };
    return (
        <>
            <input type="text" 
                       placeholder="Escribe tu mensaje" 
                       className="form-control"
                       onChange={handleChange}
                       value={mensaje}
                       />
            <button className="btn btn-primary btn-block" onClick={submitMessage}>
                Enviar Mensaje
            </button>
        </>
    )
}

export default NewMessageControl;
