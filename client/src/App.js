import './App.css';
import NavBar from './NavBar';
import LogIn from './LogIn';
import Home from './Home'

import { useState, useEffect } from 'react'
import { Routes, Route } from "react-router-dom";
import AudioUpload from './AudioUpload';
import About from './About'

function App() {
  const [user, setUser] = useState(null)

  useEffect(() => {
    fetch("/api/me").then((response) => {
      if (response.ok) {
        response.json().then((user) => setUser(user));
      }
    });
  },[]);


  if (user) { 
    return (
    <div className="App" >
      <NavBar onLogout={setUser}/>
      <p>Logged In User: {user.username}  </p>
      <Routes basename="/beatcoderz">
        <Route path = '/'
        element = {
          <div id='app-home'>
            <Home user={user}/>
          </div>
          
        } 
        />

        <Route path = '/about'
        element={
          <div id="about">
            <h1>About</h1>
            <About />
          </div>
          
        }
        />

        <Route path = '/upload-audio'
        element={
          <AudioUpload user={user}/>
        }
        />

      </Routes>
      
    </div>
  );
} else {
  return (
      <div id="Login">
      <h1>Welcome to BeatCoder!</h1>
      <LogIn onLogin={setUser} />
      </div>
  )}
}
export default App;
