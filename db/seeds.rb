user1 = User.create(username:"Joe")

song1 = SoundPack.create(name:"lofi", genre:"lofi")
song2 = SoundPack.create(name:"Synthwave", genre: "Synthwave")

Sound.destroy_all

# # lofi sounds
sound1 = Sound.create(name:"lofi_kick1", user_id: 1, sound_pack_id: 1, audio_data: Base64.encode64(File.read(Rails.root.to_s + '/public/sound_files/kick1.wav')))

sound2 = Sound.create(name:"lofi_snare1", user_id: 1, sound_pack_id: 1, audio_data: Base64.encode64(File.read(Rails.root.to_s + '/public/sound_files/snare1.wav')))

sound3 = Sound.create(name:"lofi_hat1", user_id: 1, sound_pack_id: 1, audio_data: Base64.encode64(File.read(Rails.root.to_s + '/public/sound_files/hat1.wav')))

sound4 = Sound.create(name:"lofi_perc1", user_id: 1, sound_pack_id: 1, audio_data: Base64.encode64(File.read(Rails.root.to_s + '/public/sound_files/perc1.wav')))

# # Synthwave sounds
sound5 = Sound.create(name:"synth_kick2", user_id: 1, sound_pack_id: 2, audio_data: Base64.encode64(File.read(Rails.root.to_s + '/public/sound_files/kick2.wav')))

sound6 = Sound.create(name:"synth_snare2", user_id: 1, sound_pack_id: 2, audio_data: Base64.encode64(File.read(Rails.root.to_s + '/public/sound_files/snare2.wav')))

sound7 = Sound.create(name:"synth_hat2", user_id: 1, sound_pack_id: 2, audio_data: Base64.encode64(File.read(Rails.root.to_s + '/public/sound_files/hat2.wav')))

sound8 = Sound.create(name:"synth2", user_id: 1, sound_pack_id: 2, audio_data: Base64.encode64(File.read(Rails.root.to_s + '/public/sound_files/synth2.wav')))
