# Gabriel Lujan - Fullstack Project: AudioCaelum (Schema) 

##* USERS * 

| column name     | data type | details                   |
|-----------------|-----------|---------------------------|
| id              | integer   | not null, primary key     |
| username        | string    | not null, indexed         |
| email           | string    | not null, indexed, unique |
| password_digest | string    | not null, unique          |
| session_token   | string    | not null, indexed, unique |

##* ARTISTS * 

| column name | data type | details               |
|-------------|-----------|-----------------------|
| id          | integer   | not null, primary key |
| username    | string    | not null, indexed     |
| user_id     | integer   | not null, foreign key |

##* SONGS * 

| column name  | data type | details               |
|--------------|-----------|-----------------------|
| id           | integer   | not null, primary key |
| song_title   | string    | not null, indexed     |
| artist_id    | integer   | not null, foreign key |
| album_id     | integer   | not null, foreign key |

##* COMMENTS * 

| column name  | data type | details               |
|--------------|-----------|-----------------------|
| id           | integer   | not null, primary key |
| body         | text      | not null              |
| author_id    | integer   | not null, foreign key |
| comment_id   | integer   | not null, foreign key |

##* FOLLOWS * 

| column name | data type | details                        |
|-------------|-----------|--------------------------------|
| id          | integer   | not null, primary key          |
| user_id     | integer   | not null, indexed, foreign key |

##* FOLLOWERS * 

| column name   | data type | details                        |
|---------------|-----------|--------------------------------|
| id            | integer   | not null, primary key          |
| user_id       | integer   | not null, indexed, foreign key |

##* ALBUMS (bonus) * 

| column name | data type | details               |
|-------------|-----------|-----------------------|
| id          | integer   | not null, primary key |
| name        | string    | not null              |
| song_id     | integer   | not null, foreign key |

##* SONG LIKES (bonus) * 

| column name             | data type | details               |
|-------------------------|-----------|-----------------------|
| id                      | integer   | not null, primary key |
| song_id                 | integer   | not null, foreign key |

##* PLAYS (bonus) * 

| column name       | data type | details               |
|-------------------|-----------|-----------------------|
| id                | integer   | not null, primary key |
| song_id           | integer   | not null, foreign key |

##* REPOSTS (bonus) * 

| column name         | data type | details               |
|---------------------|-----------|-----------------------|
| id                  | integer   | not null, primary key |
| user_id             | integer   | not null, foreign key |
| song_id             | integer   | not null, foreign key |
