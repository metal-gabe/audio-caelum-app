json.extract! song, :id, :song_title
json.songUrl url_for(song.audio_file)
