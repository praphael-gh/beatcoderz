// import { parseFile } from "aws-sdk/lib/shared-ini/ini-loader";
import { useState } from "react";

function AudioUpload({ user, soundPacks, setSoundPacks}) {
  const [name, setName] = useState("");
  const [audio, setAudio] = useState(null);
  const [soundPackId, setSoundPackId] = useState(1)
  //   const audioUpload = useRef()
  const [soundPackName, setSoundPackName] = useState('');
  const [soundPackGenre, setSoundPackGenre] = useState('');

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

          <input 
            type="text" 
            placeholder="Soundpack Genre"
            onChange={(e) => setSoundPackGenre(e.target.value)}
            value={soundPackGenre}
          />

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
          <br/>
          <label for="soundpack-select">Choose a Soundpack:</label>
          <select id='soundpack-select' name='Soundpacks' onChange={(e) => setSoundPackId(e.target.value)}>
            {soundPacks.map((soundPack) => {
              return (
                <option value={soundPack.id}>Name: {soundPack.name} // Genre:{soundPack.genre}</option>
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
