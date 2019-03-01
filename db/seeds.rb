# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).

ActiveRecord::Base.transaction do 
  User.destroy_all 
  bueller = User.create!(username: 'bueller', email: 'b@b.com', password: 'password') 
  sloane = User.create!(username: 'sloane', email: 's@b.com', password: 'password') 
  cameron = User.create!(username: 'cameron', email: 'c@b.com', password: 'password') 
  rooney = User.create!(username: 'rooney', email: 'r@b.com', password: 'password') 
  jeanie = User.create!(username: 'jeanie', email: 'j@b.com', password: 'password') 
  dethklok = User.create!(username: 'dethklok', email: 'deth@klok.com', password: 'password') 
  pentakill = User.create!(username: 'pentakill', email: 'penta@kill.com', password: 'password') 
  etc = User.create!(username: 'etc', email: 'etc@blizz.com', password: 'password') 
  sylvanas = User.create!(username: 'sylvanas', email: 'sylvanas@blizz.com', password: 'password') 
  thrall = User.create!(username: 'thrall', email: 'thrall@blizz.com', password: 'password') 
  valeera = User.create!(username: 'valeera', email: 'valeera@blizz.com', password: 'password') 
  tracer = User.create!(username: 'tracer', email: 'tracer@blizz.com', password: 'password') 
  liming = User.create!(username: 'liming', email: 'liming@blizz.com', password: 'password') 
  diablo = User.create!(username: 'diablo', email: 'diablo@blizz.com', password: 'password') 
  ekko = User.create!(username: 'ekko', email: 'ekko@lol.com', password: 'password') 
  ashe = User.create!(username: 'ashe', email: 'ashe@lol.com', password: 'password') 
  gnar = User.create!(username: 'gnar', email: 'gnar@lol.com', password: 'password') 
  sion = User.create!(username: 'sion', email: 'sion@lol.com', password: 'password') 
  yasuo = User.create!(username: 'yasuo', email: 'yasuo@lol.com', password: 'password') 
  jhin = User.create!(username: 'jhin', email: 'jhin@lol.com', password: 'password') 

  # Add song seeds here 
end 
