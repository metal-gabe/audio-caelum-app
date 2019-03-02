song = Song.first 
file = File.open('app/assets/audio/01--undead_mess.m4a') 
song.audio_file.attach(io: file, filename: '01--undead_mess.m4a') 
# song.audio_file.attached? 
