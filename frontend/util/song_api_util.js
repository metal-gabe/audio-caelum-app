export const createSongAPI = (song) => { 
  return ({ 
    method: `POST`, 
    dataType: `json`, 
    url: `/api/songs`, 
    data: { song }, 
  }); 
}; 
export const fetchAllSongsAPI = () => { 
  return ({ 
    method: `GET`, 
    dataType: `json`, 
    url: `/api/songs`, 
  }); 
}; 
export const fetchSongAPI = (id) => { 
  return ({ 
    method: `GET`, 
    dataType: `json`, 
    url: `/api/songs/${id}`, 
  }); 
}; 
export const updateSongAPI = (song) => { 
  return ({ 
    method: `PATCH`, 
    dataType: `json`, 
    url: `/api/songs/${song.id}`, 
    data: { song }, 
  }); 
}; 
export const deleteSongAPI = (id) => { 
  return ({ 
    method: `DELETE`, 
    dataType: `json`, 
    url: `/api/songs/${id}`, 
  }); 
}; 
