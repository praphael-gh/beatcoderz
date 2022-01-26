import "./BeatButtons.css";

function BeatButtons({ audioArray, setAudioArray }) {
  let volume = 4;

  function play(e) {
    // debugger
    let audioPlay = e.target.children[0]
    // audioPlay.load()
    // debugger
    // console.log(audioPlay)
    // console.log(audioPlay)
    audioPlay.cloneNode().play()
    // let audioPlay = new Audio(e.target.value);
    // audioPlay.volume = parseFloat(e.target.children[1].value / 10);
    // console.log(e.target.children[1].value)
    // if audioPlay.src = .src in audioArray
    // just play audioPlay, otherwise add to audioArray
    // if (audioPlay.src === audioArray.includes(audioPlay.src)) {
    //   audioPlay.play();
    // } else {
    //   setAudioArray([...audioArray, audioPlay]);
    //   audioPlay.play();
    // }
    // console.log(audioArray);
  }

  // function pause(e) {
  //   let pauseAudio = document.getElementById(e.target.value)
  //   // console.log(pauseAudio)
  //   pauseAudio.pause()

  // }

  function keyPlay(e) {
    let i = parseInt(e.key);

    let keyAudioPlay = new Audio(audioArray[i].audio_url);
    console.log(audioArray[i].audio_url)
    // setAudioArray([...audioArray, keyAudioPlay]);
    // keyAudioPlay.volume = parseFloat(e.target.children[1].value / 10)
    keyAudioPlay.play();
  }

  console.log(audioArray)

  return (
    <div className="button-container" onKeyDown={(e) => keyPlay(e)}>
      
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
              {/* <button id="pause" value={sound.name} onClick={(e) => pause(e)}>Pause All Tracks</button> */}
            </button>
            
          </div>
        );
      })}
      <div id="log"></div>
    </div>
  );
}

export default BeatButtons;
