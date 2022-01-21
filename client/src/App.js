import './App.css';
import NavBar from './NavBar';
import LogIn from './LogIn';
import Home from './Home'

import { useState, useEffect } from 'react'
import { Routes, Route } from "react-router-dom";
import AudioUpload from './AudioUpload';

function App() {
  const [user, setUser] = useState(null)

  useEffect(() => {
    fetch("/me").then((response) => {
      if (response.ok) {
        response.json().then((user) => setUser(user));
      }
    });
  }, []);

  if (user) { 
    return (
    <div className="App" >
      <NavBar onLogout={setUser}/>
      <Routes>
        <Route path = '/'
        element = {
          <Home />
        } 
        />

        <Route path = '/about'
        element={
          <h1>About</h1>
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
      <h1>BeatCoder</h1>
      <LogIn onLogin={setUser} />
      </div>
  )}
}
export default App;
