user1 = User.create(username:"Joe")

song1 = Song.create(name:"lofi", genre:"lofi")

sound1 = Sound.create(name:"kick1", sound:"./sound_files/kick1.wav", user_id: 1, song_id: 1)
sound2 = Sound.create(name:"snare1", sound:"./sound_files/snare1.wav", user_id: 1, song_id: 1)
sound3 = Sound.create(name:"hat1", sound:"./sound_files/hat1.wav", user_id: 1, song_id: 1)

