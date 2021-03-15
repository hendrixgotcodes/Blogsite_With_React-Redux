import { Avatar } from '@material-ui/core'
import React, { useState } from 'react'
import { GoogleLogout } from 'react-google-login'
import { useDispatch, useSelector } from 'react-redux'
import { selectSignedIn, selectUserData, actions } from '../features/userSlice'

import store from '../app/store';

import '../styling/navbar.css';

function NavBar() {

    const [inputValue, setInputValue] = useState("tech")
    const isSignedIn = useSelector(selectSignedIn)
    const userData = useSelector(selectUserData);


    console.log(userData, store.getState());

    const dispatch = useDispatch();

    return (
        <div className="navbar">

            <h1 className="navbar__header">BlogMania💬</h1>
            {isSignedIn && 
                (<div className="blog__search">
                    <input value={inputValue} onChange={handleInputOnchange} placeholder="Search for a blog" className="search"/>
                    <button className="submit" onClick={handleBtnOnClick} >Search</button>
                </div> )
            }

            {isSignedIn ? (
                <div className="navbar__user__data">
                    <Avatar className="user" src={userData?.imageUrl} alt={userData?.name} />
                    <h1 className="signedIm">{userData?.givenName}</h1>
                    <GoogleLogout
                        clientId="649263370597-5l6netlbeujj0og2kpd7gpumtthod9ia.apps.googleusercontent.com"
                        render = {(renderProps)=>(

                            <button
                                className="logout__button"
                                onClick = {renderProps.onClick}
                                disabled = {renderProps.disabled}
                            >
                                Logout 😞  
                            </button>

                        )}
                        onLogoutSuccess = {logout}
                     />
                </div> )
                :
                (<h1 className="notSignedIn">User not available🙄</h1> )
            }
            
        </div>
    )

    function logout(){

        dispatch(actions.setSignedIn(false))
        dispatch(actions.setUserData(null))

    }

    function handleInputOnchange(e){

        setInputValue(e.target.value)

    }

    function handleBtnOnClick(e){

        

    }
}

export default NavBar
