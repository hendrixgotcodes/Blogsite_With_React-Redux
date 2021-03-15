import React from 'react'
import HomePage from './components/HomePage'
import NavBar from './components/NavBar';

import './styling/app.css';

export default function App() {
    return (
      <div className="app">
          <NavBar />
           <HomePage />
      </div>
    )
}
