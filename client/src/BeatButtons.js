import { useEffect, useState } from 'react'

import globalAudio from './GlobalAudio'
import './BeatButtons.css'

function BeatButtons() {

    const [sounds, setSounds] = useState([])

    useEffect(() => {
        fetch('/sounds')
        .then(resp => resp.json())
        .then((json) => {
            setSounds(json)
        });
    }, []) 

    const handleKeyPress = (e) => {
        if (e.key === 'g') {
            document.getElementById('audio1').play()
        } else if (e.key === 'h') {
            document.getElementById('audio2').play()
        } else if (e.key === 'j') {
            document.getElementById('audio3').play()
        }
    }


    return (
        <div className="sound_container">
            <audio id='audio1' src='./sound_files/kick1.wav'></audio>
            <audio id='audio2' src='./sound_files/snare1.wav'></audio>
            <audio id='audio3' src='./sound_files/hat1.wav'></audio>
            <input type='text' onKeyDown={handleKeyPress}/>
            {sounds.map((sound) => {
                return (
                    <div 
                    key={sound.id}
                    className='sound_box'
                    // onKeyDown={handleKeyPress}
                    >
                        <input onKeyDown={handleKeyPress}/>
                        <p>{sound.name}</p>
                        <audio id={sound.id} src={sound.sound}></audio>
                    </div>
                )
            })}
        </div>
    )
}

export default BeatButtons;