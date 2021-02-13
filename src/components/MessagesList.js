import React, {useEffect, useState} from 'react';

function MessagesList({firebase, fetchDataControl}) {
    const [mensajes, setMensajes] = useState([]);
    useEffect(() => {
        let currentMessages;
        let ignore = false;
        firebase.database().ref('/messages').on('value', (snapshot)=>{
            currentMessages = Object.entries(snapshot.val());
            console.log(currentMessages);
            if(!ignore)setMensajes(currentMessages);
        });
        return ()=> {ignore = true};
    }, [fetchDataControl]);
    const renderMessages = ()=>{
        if(mensajes.length == 0)return;
        return mensajes.map((msj, id)=>{
            return (
                <li key={msj[0]} className="list-group-item list-group-item-action">
                    {msj[1].texto}
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
