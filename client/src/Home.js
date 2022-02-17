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
        if (data[0].sounds.length > 0) {
          setAudioArray(data[0].sounds)
        } else {
          setAudioArray([])
        }
        console.log(data[0].sounds)
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