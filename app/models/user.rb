class User < ApplicationRecord 
  validates :password_digest, presence: true 
  validates :email, :session_token, uniqueness: true, presence: true 
  validates :password, length: { minimum: 6, allow_nil: true } 
  after_initialize :ensure_session_token 

  attr_reader :password 

  has_many :songs 
  # has_many :follows 
  # has_many :followers, through: :follows 
  # has_many :playlists # (bonus feature to be implemented later) 

  def self.find_by_credentials(username, password) 
    user = User.find_by(username: username) 
    user && user.valid_password?(password) ? user : nil 
  end 

  def self.generate_session_token() 
    SecureRandom::urlsafe_base64 
  end 

  def ensure_session_token() 
    self.session_token ||= User.generate_session_token 
  end 

  def reset_session_token! 
    self.session_token = User.generate_session_token 
    self.save! 
    self.session_token 
  end 

  def valid_password?(pw) 
    BCrypt::Password.new(self.password_digest).is_password?(pw) 
  end 

  def password=(pw) 
    @password = pw 
    self.password_digest = BCrypt::Password.create(pw) 
  end 
end 
