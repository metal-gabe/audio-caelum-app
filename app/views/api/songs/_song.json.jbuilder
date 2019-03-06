json.extract! song, :id, :song_title

if song.audio_file.attached?
  json.songUrl url_for(song.audio_file)
end
