# Gabriel Lujan - Fullstack Project: AudioCaelum (Sample State) 

```{ 
  entities: { 
    users: { 
      17: { 
        id: 17, 
        username: 'cheese', 
        email: 'hela@xmen.com', 
      }, 
      28: { 
        id: 28, 
        username: 'fro', 
        email: 'parka@starter.com', 
      }, 
      19: { 
        id: 19, 
        username: 'young1', 
        email: 'spidey@avengers.com', 
      }, 
    }, 
    artists: { 
      53: { 
        id: 53, 
        name: 'Dethklok', 
        songs: [35, 8, 76, 22, 90, 54], 
        albums: [34, 2, 21], 
      }, 
      90: { 
        id: 90, 
        name: 'Elite Tauren Chieftain', 
        songs: [89, 34, 66, 75], 
        albums: [9, 5, 3, 125], 
      }, 
      515: { 
        id: 515, 
        name: 'Pentakill', 
        songs: [9, 51, 33, 5, 2], 
        albums: [7, 52], 
      }, 
    }, 
    songs: { 
      3: { 
        id: 3, 
        title: 'Cull', 
        artist: 515, 
        album: 7, 
      }, 
      7: { 
        id: 7, 
        title: 'Punting Gnomes', 
        artist: 90, 
        album: 125, 
      }, 
      88: { 
        id: 88, 
        title: 'Briefcase Full of Guts', 
        artist: 53, 
        album: 34, 
      }, 
    }, 
    albums: { 
      7: { 
        id: 7, 
        name: 'Smite & Ignite', 
        songs: [2, 7, 34], 
      }, 
      34: { 
        id: 34, 
        name: 'The Dethalbum', 
        songs: [43, 76, 81], 
      }, 
      125: { 
        id: 125, 
        name: "Lok'tar Ogar", 
        songs: [9, 55, 71], 
      }, 
    }, 
    comments: { 
      3: { 
        id: 3, 
        body: 'For the Horde!'
      }, 
      215: { 
        id: 215, 
        body: 'This is called a food libraries.'
      }, 
      79: { 
        id: 79, 
        body: "I'm no hero. Just a Yordle with a hammer.", 
      }, 
    }, 
  }, 
  ui: {}, 
  errors: { 
    login: 
      ["Username/Email does not exist", "That password doesn't match our records"], 
    playback: 
      ["That song could not be found.", "There was an error trying to play that song.""], 
  }, 
  session: { currentUserId: 17 } 
} 
```
