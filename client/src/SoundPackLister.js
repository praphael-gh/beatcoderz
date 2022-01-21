import './SoundPackLister.css'

function SoundPackLister ({soundPacks, setSelectedSoundPack}) {
console.log(soundPacks)
    return (
        
        <div id="song-lister">
            {soundPacks.map(soundPack => {
                return (
                    <div key={soundPack.id} id={soundPack.id} className="song-box"
                    onClick={() => setSelectedSoundPack(soundPack.id)}>
                        <h2>Song Name: {soundPack.name}</h2>
                        <h2>Genre: {soundPack.genre}</h2>
                    </div>
                )
            })}
        </div>
    )
}

export default SoundPackLister;