class Song < ApplicationRecord 
  validates :song_title, presence: true 

  belongs_to :user 
  # has_many :comments 
  # has_one :album 
end 
