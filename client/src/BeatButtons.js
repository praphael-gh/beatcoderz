import "./BeatButtons.css";

function BeatButtons({ audioArray, setAudioArray }) {
  let volume = 4;

  function play(e) {
    let audioPlay = new Audio(e.target.value);
    audioPlay.volume = parseFloat(e.target.children[2].value / 10);

    if (audioPlay.src === audioArray.includes(audioPlay.src)) {
      audioPlay.play();
    } else {
      setAudioArray([...audioArray, audioPlay]);
      audioPlay.play();
    }
    // console.log(audioArray);
  }

  function pause() {
    for (let i = 0; i < audioArray.length; i++) {
      audioArray[i].pause()
      setAudioArray([])
    }
  }

  function keyPlay(e) {
    let i = parseInt(e.key);

    let keyAudioPlay = new Audio(audioArray[i].audio_url);
    // console.log(audioArray[i].audio_url)
    // setAudioArray([...audioArray, keyAudioPlay]);
    // keyAudioPlay.volume = parseFloat(e.target.children[1].value / 10)
    // keyAudioPlay.load()
    keyAudioPlay.play();
  }

  console.log(audioArray)

  return (
    <div className="button-container" onKeyDown={(e) => keyPlay(e)}>
      <button id="pause" value={sound.name} onClick={() => pause()}>Pause All Tracks</button>
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
}

export default BeatButtons;
