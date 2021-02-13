import React, {useState, useEffect} from 'react'
import firebase from 'firebase';
import MessagesList from './MessagesList';
import NewMessageControl from './NewMessageControl';

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
