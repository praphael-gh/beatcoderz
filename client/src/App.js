import './App.css';
import NavBar from './NavBar';
import LogIn from './LogIn';
import Home from './Home'

import { useState, useEffect } from 'react'
import { Routes, Route } from "react-router-dom";
import AudioUpload from './AudioUpload';

function App() {
  const [user, setUser] = useState(null)
  const [soundPacks, setSoundPacks] = useState([])

  useEffect(() => {
    fetch("/api/me").then((response) => {
      if (response.ok) {
        response.json().then((user) => setUser(user));
      }
    });
  }, []);

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
          <Home soundPacks={soundPacks} setSoundPacks={setSoundPacks}/>
        } 
        />

        <Route path = '/about'
        element={
          <h1>About</h1>
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
      <h1>BeatCoder</h1>
      <LogIn onLogin={setUser} />
      </div>
  )}
}
export default App;
