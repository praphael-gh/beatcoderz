import { useState, useEffect } from "react";
import "./SoundPackLister.css";

function SoundPackLister({ selectedSoundPack, setSelectedSoundPack }) {
  // console.log(soundPacks)
  // setSelectedSoundPack(1) 
  const [listerSoundPacks, setListerSoundPacks] = useState([]);



  useEffect(() => {
    fetch("/api/sound_packs")
      .then((resp) => resp.json())
      .then((data) => { setListerSoundPacks(data) });

      // fetch("/api/sound_packs")
      //   .then((resp) => resp.json())
      //   .then((data) => {
      //     setListerSoundPacks([...defaultData, ...data])
      //   });
    
  }, [selectedSoundPack]);

  const handleSelectedSoundPackClick = (id) => {
    setSelectedSoundPack(id);
  };

  const handleSoundPackDelete = (e) => {
    fetch(`/api/sound_packs/${e.target.value}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      // body: JSON.stringify()
    });
    // console.log(e.target.value)
  };

  if (listerSoundPacks.length > 0) {
    return (
      <div id="song-lister">
        {listerSoundPacks.map((soundPack) => {
          return (
            <div
              key={soundPack.id}
              id={soundPack.name}
              className="song-box"
              onClick={() => handleSelectedSoundPackClick(soundPack.id)}
            >
              <h2>Soundpack Name: {soundPack.name}</h2>
              <h2>Genre: {soundPack.genre}</h2>
              <p>Created By: {soundPack.user.username}</p>
              <button
                value={soundPack.id}
                onClickCapture={(e) => handleSoundPackDelete(e)}
              >
                Delete Pack
              </button>
            </div>
          );
        })}
      </div>
    );
  } else {
    return <h2>No SoundPacks Available</h2>;
  }
}

export default SoundPackLister;
