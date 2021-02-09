import React, {useState, useEffect} from 'react'
import firebase from 'firebase';
import Input from './Input';
import MessagesList from './MessagesList';

const firebaseConfig = {
    apiKey: "AIzaSyAKMkPuRqTOLjj-w8f3t4z4NQk07QYYx6A",
    authDomain: "practice-react-firebase-3e7f1.firebaseapp.com",
    projectId: "practice-react-firebase-3e7f1",
    storageBucket: "practice-react-firebase-3e7f1.appspot.com",
    messagingSenderId: "1062268790325",
    appId: "1:1062268790325:web:f0f9c98e1ebe719783b37c"
};

if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
}else{
    firebase.app();
};

export const ChatRoom = () => {
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
        <div className="card">
            <div className="card-body">
                <ul>
                    <MessagesList></MessagesList>
                </ul>
            </div>
            <div className="card-footer">
                <Input handleChange={handleChange}
                       mensaje={mensaje}
                />
                <button className="btn btn-primary btn-block" onClick={submitMessage}>
                    Enviar Mensaje
                </button>
            </div>
        </div>
    );
};
