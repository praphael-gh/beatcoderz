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
  const [soundPacks, setSoundPacks] = useState([])

  useEffect(() => {
    fetch("/api/me").then((response) => {
      if (response.ok) {
        response.json().then((user) => setUser(user));
      }
    });
  },[]);

  useEffect(() => {
    fetch('/api/sound_packs')
    .then(resp => resp.json())
    .then(data => setSoundPacks(data))
  },[])

  if (user) { 
    return (
    <div className="App" >
      <NavBar onLogout={setUser}/>
      <Routes>
        <Route path = '/'
        element = {
          <div id='app-home'>
            <Home soundPacks={soundPacks} setSoundPacks={setSoundPacks}/>
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
          <AudioUpload user={user} soundPacks={soundPacks} setSoundPacks={setSoundPacks}/>
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
