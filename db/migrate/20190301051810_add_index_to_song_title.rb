class AddIndexToSongTitle < ActiveRecord::Migration[5.2] 
  def change 
    add_index :songs, :song_title 
  end 
end 
