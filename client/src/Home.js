import BeatButtons from "./BeatButtons";
import SoundPackLister from "./SoundPackLister";
import './Home.css'

import { useEffect, useState } from 'react'

function Home({soundPacks, setSoundPacks}) {
    const [selectedSoundPack, setSelectedSoundPack] = useState(1)
    const [audioArray, setAudioArray] = useState([]);

      // // Sounds from Songs (default 'lofi')
  useEffect(() => {
    fetch(`/api/sound_packs/${selectedSoundPack}`)
    .then(resp => resp.json())
    .then((data) => {
      setAudioArray(data.sounds)
    })
  }, [selectedSoundPack])

    return (
    <div className="home">
    <SoundPackLister audioArray={audioArray} setAudioArray={setAudioArray} soundPacks={soundPacks} selectedSoundPack={selectedSoundPack} setSelectedSoundPack={setSelectedSoundPack} />
    <div id="blackbox" >
        <BeatButtons audioArray={audioArray} setAudioArray={setAudioArray}/>
    </div>
    </div>
    )}

    export default Home;