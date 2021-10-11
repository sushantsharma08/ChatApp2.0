import React from "react";
import { useHistory } from 'react-router-dom';
import { ChatEngine } from 'react-chat-engine';
import { auth } from '../firebase';

const Chats = () => {
    const history = useHistory();

   const handleLogout = async () => {
       await auth.signOut();
       
       history.push('/');
   }

    return (
        <div className= "chats-page">
            <div className="nav-bar">
                <div className="logo-tab">
                    Abhedh
                </div>
                <div onClick={handleLogout} className="logout-tab">
                    Logout
                </div>
            </div>

            <ChatEngine
               height="clac(100vh - 66px)"
               projectId="2df2c1ed-b3a0-40f4-bc2b-0d9b36edd65e" 
               userName="."
               userSecret="."
            />
        </div>
    );
}

export default Chats;