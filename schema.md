# ------------------------------------------------------ 
# Gabriel Lujan - Fullstack Project: Soundcloud (Schema) 
# ------------------------------------------------------ 

| * USERS *       | data type | details                   |
|-----------------|-----------|---------------------------|
| id              | integer   | not null, primary key     |
| username        | string    | not null, indexed         |
| email           | string    | not null, indexed, unique |
| password_digest | string    | not null, unique          |
| session_token   | string    | not null, indexed, unique |
| created_at      | string    | not null                  |
| updated_at      | string    | not null                  |

| * ARTISTS * | data type | details               |
|-------------|-----------|-----------------------|
| id          | integer   | not null, primary key |
| name        | string    | not null, indexed     |
| user_id     | integer   | not null              |
| created_at  | string    | not null              |
| updated_at  | string    | not null              |

| * SONGS *  | data type | details               |
|------------|-----------|-----------------------|
| id         | integer   | not null, primary key |
| title      | string    | not null, indexed     |
| artist_id  | integer   | not null              |
| created_at | string    | not null              |
| updated_at | string    | not null              |

| * SONGS LIKES (bonus) * | data type | details               |
|-------------------------|-----------|-----------------------|
| id                      | integer   | not null, primary key |
| song_id                 | integer   | not null              |
| created_at              | string    | not null              |
| updated_at              | string    | not null              |

| * COMMENTS * | data type | details               |
|--------------|-----------|-----------------------|
| id           | integer   | not null, primary key |
| body         | text      | not null              |
| author_id    | integer   | not null              |
| created_at   | string    | not null              |
| updated_at   | string    | not null              |

| * COMMENT REPLIES * | data type | details               |
|---------------------|-----------|-----------------------|
| id                  | integer   | not null, primary key |
| body                | text      | not null              |
| comment_id          | integer   | not null              |
| created_at          | string    | not null              |
| updated_at          | string    | not null              |

| * FOLLOWS * | data type | details               |
|-------------|-----------|-----------------------|
| id          | integer   | not null, primary key |
| user_id     | integer   | not null, indexed     |
| created_at  | string    | not null              |
| updated_at  | string    | not null              |

| * FOLLOWERS * | data type | details               |
|---------------|-----------|-----------------------|
| id            | integer   | not null, primary key |
| user_id       | integer   | not null, indexed     |
| created_at    | string    | not null              |
| updated_at    | string    | not null              |

| * PLAYS (bonus) * | data type | details               |
|-------------------|-----------|-----------------------|
| id                | integer   | not null, primary key |
| song_id           | integer   | not null              |
| created_at        | string    | not null              |
| updated_at        | string    | not null              |

| * REPOSTS (bonus) * | data type | details               |
|---------------------|-----------|-----------------------|
| id                  | integer   | not null, primary key |
| user_id             | integer   | not null, indexed     |
| song_id             | integer   | not null              |
| created_at          | string    | not null              |
| updated_at          | string    | not null              |
