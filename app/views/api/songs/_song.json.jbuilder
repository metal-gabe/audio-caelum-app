json.extract! song, :id, :song_title, :artist_id

if song.audio_file.attached?
  json.songUrl url_for(song.audio_file)
end

if song.album_img.attached?
  json.albumImgUrl url_for(song.album_img)
end
