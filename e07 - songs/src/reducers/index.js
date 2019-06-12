import { combineReducers } from 'redux';

const songsReducer = () => {
  return [
    // Daft Punk songs 
    { title: 'Robot Rock', duration: '3:16' },
    { title: 'Technologic', duration: '2:55' },
    { title: 'Human After All', duration: '5:19' },
    { title: 'Da Funk', duration: '5:31' }
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === 'SONG_SELECTED') {
    return action.payload;
  }

  return selectedSong;
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer
});
