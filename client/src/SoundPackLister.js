import './SoundPackLister.css'

function SoundPackLister ({soundPacks, selectedSoundPack, setSelectedSoundPack}) {
// console.log(soundPacks)
    // setSelectedSoundPack(1)

    const handleSelectedSoundPackClick = (id) => {
        setSelectedSoundPack(id)
    }

    const handleSoundPackDelete = (e) => {
        fetch(`/api/sound_packs/${e.target.value}`, {
            method:'DELETE',
            headers: {
              'Content-Type':'application/json',
            },
            // body: JSON.stringify()
            })
        // console.log(e.target.value)
    }

    return (
        
        <div id="song-lister">
            {soundPacks.map(soundPack => {
                return (
                    <div key={soundPack.id} id={soundPack.id} className='song-box'
                    onClick={() => handleSelectedSoundPackClick(soundPack.id)}>
                        <h2>Soundpack Name: {soundPack.name}</h2>
                        <h2>Genre: {soundPack.genre}</h2>
                        <button value={soundPack.id} onClick={(e) => handleSoundPackDelete(e)}>Delete Pack</button>
                    </div>
                )
            })}
        </div>
    )
}

export default SoundPackLister;