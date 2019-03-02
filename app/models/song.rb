# == Schema Information
#
# Table name: songs
#
#  id         :bigint(8)        not null, primary key
#  song_title :string           not null
#  artist_id  :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Song < ApplicationRecord 
  validates :song_title, presence: true 

  belongs_to :artist, 
    class_name: :User, 
    foreign_key: :artist_id 

  has_one_attached :audio_file 

  ## BONUS FEATURES 
  # has_many :comments 
  # has_one :album 
end 
