import React, {useState, useEffect} from 'react'
import firebase from 'firebase';
import MessagesList from './MessagesList';
import NewMessageControl from './NewMessageControl';

const firebaseConfig = {
    //Configuración de la base de datos de firebase
};

if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
}else{
    firebase.app();
};

export const ChatRoom = () => {
    const [fetchDataControl, setFetchDataControl] = useState(true);
    const changeFetchDataControl = ()=>{
        setFetchDataControl(prevFetchDataControl=> !prevFetchDataControl);
    };
    return (
        <div className="card">
            <div className="card-body">
                <ul>
                    <MessagesList firebase={firebase} fetchDataControl={fetchDataControl}></MessagesList>
                </ul>
            </div>
            <div className="card-footer">
                <NewMessageControl firebase={firebase} changeFetchDataControl={changeFetchDataControl}></NewMessageControl>
            </div>
        </div>
    );
};
