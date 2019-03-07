class UpdateIndexUniquenessForSongTitle < ActiveRecord::Migration[5.2]
  def change
    remove_index :songs, :song_title
    add_index :songs, :song_title, unique: true
  end
end
