import React, {useState} from 'react'

export const ChatRoom = () => {
    const [mensaje, setMensaje] = useState('');
    const [mensajes, setMensajes] = useState([{id: 1, texto: 'Hola'}]);


    const handleChange = ({target})=>{
        setMensaje(target.value);
    };
    const submitMessage = ()=>{
        if(!mensaje) return alert("Agregue un mensaje");
        let newMessage = {
            id: mensajes.length,
            texto: mensaje
        };
        setMensajes(prevMensajes=>[...prevMensajes, newMessage]);
        setMensaje('');
    };
    const renderMessages = ()=>{
        return mensajes.map((msj, id)=>{
            return (
                <li key={msj.id} className="list-group-item list-group-item-action">
                    {msj.texto}
                </li>
            );
        });
    };
    return (
        <div className="card">
            <div className="card-body">
                <ul>
                    {renderMessages()}
                </ul>
            </div>
            <div className="card-footer">
                <input type="text" 
                       placeholder="Escribe tu mensaje" 
                       className="form-control"
                       onChange={handleChange}
                       value={mensaje}
                       />
                <button className="btn btn-primary btn-block" onClick={submitMessage}>
                    Enviar Mensaje
                </button>
            </div>
        </div>
    );
};
