import BeatButtons from "./BeatButtons";
import SoundPackLister from "./SoundPackLister";
import './Home.css'

import { useEffect, useState } from 'react'

function Home({}) {
    const [soundPacks, setSoundPacks] = useState([])
    const [selectedSoundPack, setSelectedSoundPack] = useState(1)
    const [audioArray, setAudioArray] = useState([]);
    const [sounds, setSounds] = useState([])

      // // Sounds from Songs (default 'lofi')
  useEffect(() => {
    fetch(`/sound_packs/${selectedSoundPack}`)
    .then(resp => resp.json())
    .then((data) => {
      setAudioArray(data.sounds)
    })
  }, [selectedSoundPack])

  // useEffect(() => {
  //   fetch(`http://[::1]:4000/sounds/1`)
  //   .then(resp => resp.json())
  //   .then()
  // })

  useEffect(() => {
    fetch('/sound_packs')
    .then(resp => resp.json())
    .then(data => setSoundPacks(data))
  },[])


    return (
    <div className="home">
    <SoundPackLister audioArray={audioArray} setAudioArray={setAudioArray} soundPacks={soundPacks} setSelectedSoundPack={setSelectedSoundPack} />
    <div id="blackbox" >
        <BeatButtons soundPacks={soundPacks} sounds={sounds} audioArray={audioArray} setAudioArray={setAudioArray}/>
    </div>
    </div>
    )}

    export default Home;