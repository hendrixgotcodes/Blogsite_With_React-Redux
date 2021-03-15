import React from 'react'
import GoogleLogin from 'react-google-login'
import {useDispatch, useSelector} from 'react-redux';
import { selectSignedIn, actions } from '../features/userSlice';

import '../styling/home.css';

function HomePage() {

    const dispatch = useDispatch()

    const login = (response)=> {

        dispatch(actions.setUserData(response.profileObj));
        // dispatch(selectUserData(response.profileObj))
        dispatch(actions.setSignedIn(true))

    };

    const isSignedIn = useSelector(selectSignedIn)

    return (
        <div className="home__page" style={{display: !isSignedIn ? "block" : "none"}}>

            {!isSignedIn &&
                <div className="login__message">

                    <h2>📗</h2>
                    <h1>A Reader's Favorite Place</h1>
                    <p>
                        We provide high quality online resources for reading blogs. Just sign up and start 
                        reading some high quality blogs.
                    </p>
                    <GoogleLogin
                        clientId="649263370597-5l6netlbeujj0og2kpd7gpumtthod9ia.apps.googleusercontent.com"
                        render= {(renderProps)=>(
                            
                            <button
                                onClick= {renderProps.onClick}
                                disabled= {renderProps.disabled}
                                className = "login__button"
                            >Login with google</button>

                        )}
                        onSuccess= {login}
                        onFailure= {login}
                        isSignedIn = {true}
                        cookiePolicy = {"single_host_origin"}
                    />

                </div>
                
            }
            
        </div>
    )
}

export default HomePage
