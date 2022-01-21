import { useState, useRef } from "react";

function AudioUpload({user}) {
  const [name, setName] = useState("");
  const [audio, setAudio] = useState(null);
//   const audioUpload = useRef()

  const handleAudioSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData()
    formData.append('name', name);
    formData.append('audio', audio);
    // formData.append('user_id', user.id)
    // formData.append('sound_pack_id', 1)


    fetch("/sounds", {
      method: "POST",
      body: formData
    });
  };

  return (
    <div id='audio-form'>
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

        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default AudioUpload;
