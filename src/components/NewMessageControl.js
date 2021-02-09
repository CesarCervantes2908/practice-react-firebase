import React from 'react';
import Input from './Input';

function NewMessageControl({firebase}) {
    const [mensaje, setMensaje] = useState('');
    const handleChange = ({target})=>{
        setMensaje(target.value);
    };
    const submitMessage = ()=>{
        if(!mensaje) return alert("Agregue un mensaje");
        let newMessage = {
            id: mensajes.length,
            texto: mensaje
        };
        firebase.database().ref(`/messages/${newMessage.id}`).set(newMessage);
        setMensaje('');
    };
    return (
        <>
            <Input handleChange={handleChange}
                       mensaje={mensaje}
                />
            <button className="btn btn-primary btn-block" onClick={submitMessage}>
                Enviar Mensaje
            </button>
        </>
    )
}

export default NewMessageControl;
