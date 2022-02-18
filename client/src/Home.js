import BeatButtons from "./BeatButtons";
import SoundPackLister from "./SoundPackLister";
import "./Home.css";

import { useEffect, useState } from "react";

function Home({ user }) {
  const [selectedSoundPack, setSelectedSoundPack] = useState(1);
  const [audioArray, setAudioArray] = useState([]);

  // // default packs
  // useEffect(() => {
  //   fetch(`/api/default-audio/`)
  //   .then((resp) => resp.json())
  //   .then((defPacks) => {})
  // },[selectedSoundPack]);

  // user sound_packs
  useEffect(() => {
    fetch(`/api/sound_packs/${selectedSoundPack}`)
      .then((resp) => resp.json())
      .then((data) => {
        console.log(data)
        setAudioArray(data[0].sounds)
      });
  }, [selectedSoundPack]);

  // useEffect(() => {
  //   fetch(`/api/sound_packs`)
  //     .then((resp) => resp.json())
  //     .then((data) => console.log(data));
  // }, []);

  return (
    <div className="home">
      <SoundPackLister selectedSoundPack={selectedSoundPack} setSelectedSoundPack={setSelectedSoundPack} />
      <div id="blackbox">
        <BeatButtons audioArray={audioArray} setAudioArray={setAudioArray} />
      </div>
    </div>
  );
}

export default Home;
