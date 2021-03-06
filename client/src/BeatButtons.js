import "./BeatButtons.css";

function BeatButtons({ audioArray }) {
  let volume = 5;

  function play(e) {
    let audioPlay = new Audio(e.target.value);
    audioPlay.volume = parseFloat(e.target.children[2].value / 10);
    audioPlay.play()
    // console.log(e.target.value)
    // debugger
  }

  // function pause() {
  //   for (let i = 0; i < audioArray.length; i++) {
  //     document.getElementById(audioArray[i].name).pause()
  //     // console.log(pauseAudio)
  //     // pauseAudio.pause()
  //   }
    
  // }

  function keyPlay(e) {
    let i = parseInt(e.key);

    let keyAudioPlay = new Audio(audioArray[i].audio_url);
    // console.log(audioArray[i].audio_url)
    // setAudioArray([...audioArray, keyAudioPlay]);
    keyAudioPlay.volume = parseFloat(e.target.children[2].value / 10)
    // keyAudioPlay.load()
    // console.log(audioArray)
    keyAudioPlay.play();
  }

  // console.log(audioArray)

  if (audioArray.length > 0) {
    return (
    <div className="button-container" onKeyDown={(e) => keyPlay(e)}>

      {/* <button id="pause" onClick={() => pause()}>Pause All Tracks</button> */}
      {audioArray.map((sound) => {
        return (
          <div key={sound.id} className="beatbutton">
            <button id={sound.id} value={sound.audio_url} onClick={(e) => play(e)}>
              {sound.name}
              <audio id={sound.name} preload="auto" src={sound.audio_url}/>
              <br />
              <input
                type="number"
                label="Volume"
                placeholder="Volume (1 ...)"
                defaultValue={volume}
              />
              
            </button>
            
          </div>
        );
      })}
      <div id="log"></div>
    </div>
  );
  } else {
    return (
      <h2>No Sounds Available</h2>
    )
  }

  
}

export default BeatButtons;
