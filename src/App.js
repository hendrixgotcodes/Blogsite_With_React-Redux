import React from 'react'
import { useSelector } from 'react-redux';
import Blogs from './components/Blogs';
import HomePage from './components/HomePage'
import NavBar from './components/NavBar';
import { selectSignedIn } from './features/userSlice';

import './styling/app.css';

export default function App() {

    const isSignedIn = useSelector(selectSignedIn)

    return (
      <div className="app">
          <NavBar />
            <HomePage />
            {isSignedIn && (<Blogs />)}
      </div>
    )
}
