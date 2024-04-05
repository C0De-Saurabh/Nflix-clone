import React, { useEffect } from 'react'
import { auth } from '../utils/firebase';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';

const Header = () => {
    const navigate = useNavigate(); 
    const dispatch = useDispatch();
    const user = useSelector((store)=>store.user);
    const handleSignOut = () =>{
            signOut(auth).then(() => {
            // Sign-out successful.
            navigate("/");
            }).catch((error) => {
            navigate("/error");
            });
    }
    useEffect(
      ()=>{const unsubscribe = onAuthStateChanged(auth,(user)=>
          {
              if(user)
              {
                  const{uid, email, displayName} = user;
                  dispatch(addUser({uid:uid, email:email, displayName:displayName})); 
                  navigate("/browse")    
              }
              else{
                  dispatch(removeUser());
                  navigate("/");
              }
          }
      
      )
    
          return ()=>unsubscribe();
    
    },
  []);






  return (
    <div className='absolute top-0 w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex flex-col md:flex-row justify-between'> 
        <img className="w-48 ml-36" src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" alt="logo" />
        {user && (<div className="flex justify-between items-center"> 
            <img className='h-11 w-11 p-2' src='https://e7.pngegg.com/pngimages/419/473/png-clipart-computer-icons-user-profile-login-user-heroes-sphere-thumbnail.png' alt='usericon'/>
            <button onClick={handleSignOut}>(SignOut)</button>
        </div>)}
    
    
    
    </div>
  )
}

export default Header