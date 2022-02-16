import BeatButtons from "./BeatButtons";
import SoundPackLister from "./SoundPackLister";
import './Home.css'

import { useEffect, useState } from 'react'

function Home({user}) {
    const [selectedSoundPack, setSelectedSoundPack] = useState(1)
    const [audioArray, setAudioArray] = useState([]);

      // // Sounds from Songs (default 'lofi')
  useEffect(() => {
    fetch(`/api/sound_packs/${selectedSoundPack}`)
    .then(resp => resp.json())
    .then((data) => {
        if (data.sounds > 0) {
          setAudioArray(data.sounds)
        } else {
          setAudioArray([])
        }
    })
  }, [selectedSoundPack])

  useEffect(() => {
    fetch(`/api/sound_packs`)
    .then(resp => resp.json())
    .then(data => console.log(data))
  },[])

    return (
    <div className="home">
    <SoundPackLister setSelectedSoundPack={setSelectedSoundPack} />
    <div id="blackbox" >
        <BeatButtons audioArray={audioArray} setAudioArray={setAudioArray}/>
    </div>
    </div>
    )}

    export default Home;