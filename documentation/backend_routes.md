# Gabriel Lujan - Fullstack Project: AudioCaelum (MVP List) 

## BACKEND ROUTES 
  # HTML 
  * `GET /` `StaticPagesController#root` 
  
  # API Endpoints 
  `users` 
    * `GET /api/users` - this would filter & return users for the follows/following frontend routes 
    * `POST /api/users` - sign up 
    * `DELETE /api/users/:id` - delete/deactivate user account (BONUS) 

  `session` 
    * `POST /api/session` - log in 
    * `DELETE /api/session` - log out 

  `artists` 
    * `GET /api/artists` - this would filter based on search results and return the list of artists 
      - (not sure that I need this, artists are just users) 

  `songs` 
    * `GET /api/songs/:id` - read/show user song 
    * `POST /api/songs/:id` - create/add user song 
    * `PATCH /api/songs/:id` - update user song 
    * `DELETE /api/songs/:id` - delete user song 

  `comments` 
    * `GET /api/comments` - returns the associated comments for a particular song 
      - (I feel that this endpoint is too crazy and that the association would relieve this) 
    * `POST /api/comments` - add/create comment 
    * `DELETE /api/comments/:id` - delete user comment 

  `follows/followers` 
    * `GET /api/follows` - return all followers of a given user 
    * `POST /api/follows` - add follow to given user 
    * `DELETE /api/follows/:id` - add follow to given user 
