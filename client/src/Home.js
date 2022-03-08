import BeatButtons from "./BeatButtons";
import SoundPackLister from "./SoundPackLister";
import "./Home.css";

import { useEffect, useState } from "react";

function Home({ user }) {
  const [selectedSoundPack, setSelectedSoundPack] = useState(1);
  const [audioArray, setAudioArray] = useState([]);

  // user sound_packs
  useEffect(() => {
    fetch(`/api/sound_packs/${selectedSoundPack}`)
      .then((resp) => resp.json())
      .then((data) => {
        setAudioArray(data[0].sounds)
      });
  }, [selectedSoundPack]);

  return (
    <div className="home">
      <SoundPackLister user={user} selectedSoundPack={selectedSoundPack} setSelectedSoundPack={setSelectedSoundPack} />
      <div id="blackbox">
        <BeatButtons audioArray={audioArray} setAudioArray={setAudioArray} />
      </div>
      <p id='logged_in'>Logged In User: {user.username}  </p>
    </div>
  );
}

export default Home;
