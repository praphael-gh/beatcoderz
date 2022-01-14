import { useState, useEffect } from 'react'

function GlobalAudio() {
    const [soundFiles, setSoundFiles] = useState([])

    useEffect(() => {
        fetch('/sounds')
        .then(resp => resp.json())
        .then((json) => {
            setSoundFiles(json)
        });
    }, []) 

    window.newAudio = {}

    const audioSound = soundFiles.forEach(audio => {
        window.newAudio[audio.name] = new Audio(audio.sound)
        // newAudio.push({[audio.name]: new Audio(audio.sound)})
        // return newAudio
        // debugger
    })
    
    // I want to take the objects returned from the useEffect (setting the state soundFiles)
    // Go through each object, and pull out audio.name and audio.sound as a key/value pair
    // const balh = {
    // 'dwdw': dwadw,
    // 'dwadw':
    // }


        return (
            <div>
                <button onClick={() => window.newAudio['kick1'].play()}>Button</button>
            </div>
        )


}



    // const play = (name) => {
    //     audios[name].play();
    // };

    // const pause = (name) => {
    //     audios[name].pause();
    // };


export default GlobalAudio;