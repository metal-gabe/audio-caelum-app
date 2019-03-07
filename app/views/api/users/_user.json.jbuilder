# Need to filter out the password_digest and session_token
# from the user object that gets returned
json.extract! user, :id, :username, :email

if user.profile_img.attached?
  json.profileImgUrl url_for(user.profile_img)
end
