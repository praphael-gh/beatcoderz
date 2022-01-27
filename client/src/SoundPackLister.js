import './SoundPackLister.css'

function SoundPackLister ({soundPacks, selectedSoundPack, setSelectedSoundPack}) {
// console.log(soundPacks)
    // setSelectedSoundPack(1)

    const handleSelectedSoundPackClick = (id) => {
        setSelectedSoundPack(id)
    }
    return (
        
        <div id="song-lister">
            {soundPacks.map(soundPack => {
                return (
                    <div key={soundPack.id} id={soundPack.id} className='song-box'
                    onClick={() => handleSelectedSoundPackClick(soundPack.id)}>
                        <h2>Song Name: {soundPack.name}</h2>
                        <h2>Genre: {soundPack.genre}</h2>
                    </div>
                )
            })}
        </div>
    )
}

export default SoundPackLister;