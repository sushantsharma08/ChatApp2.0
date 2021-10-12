import React,{ useRef, useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { ChatEngine } from 'react-chat-engine';
import { auth } from '../firebase';

import { useAuth } from '../contexts/AuthContext';
import axios from 'axios';

const Chats = () => {
    const history = useHistory();
    const { user } = useAuth();
    const [loading, setLoading] = useState(true);

   const handleLogout = async () => {
       await auth.signOut();
       
       history.push('/');
   }

   const getFile = async(url) => {
       const response = await fetch(url);
       const data = await response.blob();

       return new File([data], "userPhoto.jpg", { type: 'image/jpg'})
   }

   useEffect(() => {
     if(!user){
         history.push('/');

         return;
     }

     axios.get('https://api.chatengine.io/users/me', {
         headers: {
             "project-id": "2df2c1ed-b3a0-40f4-bc2b-0d9b36edd65e",
             "user-name": user.email,
             "user-secret": user.uid,
            }
     })
     .then(() => {
         setLoading(false);
     })
     .catch(() => {
           let formdata = new FormData();
           formdata.append('email', user.email);
           formdata.append('username', user.displayName);
           formdata.append('secret', user.uid);

           getFile(user.photoURL)
              .then((avatar) => {
                  formdata.append('avatar', avatar, avatar.name);

                  axios.post('https://api.chatengine.io/users/',
                      formdata,
                      {headers: { "private-key": "13e71b0a-7d24-4f8e-b98d-4f4ab46dc72b" } } 
                    )
                    .then(() => setLoading(false))
                    .catch((error) => console.log(error))
              })
        })
   }, [user, history]);

   if(!user || loading) return 'Loading...';

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
               projectID="2df2c1ed-b3a0-40f4-bc2b-0d9b36edd65e" 
               userName={user.email}
               userSecret={user.uid}
            />
        </div>
    )
}

export default Chats;