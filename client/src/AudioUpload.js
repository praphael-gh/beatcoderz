import { useState, useEffect } from "react";

import './AudioUpload.css'

function AudioUpload({ user }) {
  const [soundPacks, setSoundPacks] = useState([])
  const [name, setName] = useState("");
  const [audio, setAudio] = useState(null);
  const [soundPackId, setSoundPackId] = useState()
  const [soundPackName, setSoundPackName] = useState('');
  const [soundPackGenre, setSoundPackGenre] = useState('');
  
  

  useEffect(() => {
    fetch('/api/sound_packs')
    .then(resp => resp.json())
    .then(allPacks => {
      let soundPackArray = allPacks.filter(pack => pack.user.id === user.id)  
      setSoundPacks(soundPackArray)
      
    })
  },[])

  const handleAudioSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("name", name);
    formData.append("audio_data", audio);
    formData.append("user_id", user.id)
    formData.append('sound_pack_id', soundPackId)

    fetch("/api/sounds", {
      method: "POST",
      body: formData,
    });
  };

  const handleSoundPackSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("name", soundPackName);
    formData.append("genre", soundPackGenre);
    formData.append("user_id", user.id);


    fetch("/api/sound_packs", {
      method: "POST",
      body: formData,
    });
  }; 
  
  return (
    <div id="audio-form">
      <div className="create-soundpack">
        <form onSubmit={handleSoundPackSubmit}>
          <input 
            type="text"
            placeholder="Soundpack Name"
            onChange={(e) => setSoundPackName(e.target.value)}
            value={soundPackName}
          />
          <br/>
          <input 
            type="text" 
            placeholder="Soundpack Genre"
            onChange={(e) => setSoundPackGenre(e.target.value)}
            value={soundPackGenre}
          />
          <br/>
          <input
            type="submit"
            value="Submit"
          />
        </form>
      </div>
      <br/>
      <div className="upload-sound">
        <form onSubmit={handleAudioSubmit}>
          <input
            type="text"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
          <input 
            type="file" 
            onChange={(e) => setAudio(e.target.files[0])}
          />
          <label for="soundpack-select">Choose a Soundpack:</label>
          <select id='soundpack-select' name='Soundpacks' onClick={(e) => setSoundPackId(e.target.value)}>
            {soundPacks.map((soundPack) => {
              return (
                <option key={soundPack.id} value={soundPack.id} >Name: {soundPack.name} // Genre:{soundPack.genre}</option>
              )
            })}
          </select>
          <input 
            type="submit" 
            value="Submit" 
          />
        </form>
      </div>
    </div>
  );
}

export default AudioUpload;
