# Need to filter out the password_digest and session_token
# from the user object that gets returned
json.extract! user, :id, :username, :email
