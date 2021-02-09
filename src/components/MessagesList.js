import { useEffect, useState } from "react";
import React, {useEffect, useState} from 'react';

function MessagesList() {
    const [mensajes, setMensajes] = useState([]);
    useEffect(() => {
        firebase.database().ref('/messages').on('value', snapshot=>{
            const currentMessages = snapshot.val();
            console.log(currentMessages)
            if(currentMessages){
                setMensajes(currentMessages);
            };
        });
    });
    const renderMessages = ()=>{
        if(mensajes.length == 0)return;
        return mensajes.map((msj, id)=>{
            return (
                <li key={msj.id} className="list-group-item list-group-item-action">
                    {msj.texto}
                </li>
            );
        });
    };
    return (
        <>
            {renderMessages()}      
        </>
    );
}

export default MessagesList;
