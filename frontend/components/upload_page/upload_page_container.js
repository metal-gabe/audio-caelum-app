import { connect } from 'react-redux'; 
import UploadPage from './upload_page'; 
import { createSongAC } from '../../actions/song_actions'; 

const mapStateToProps = ({ entities, session, errors }) => { 
  return ({}); 
}; 

const mapDispatchToProps = (dispatch) => { 
  return ({ 
    createSong: (song) => dispatch(createSongAC(song)), 
  }); 
}; 

const UploadPageContainer = 
  connect(mapStateToProps, mapDispatchToProps)(UploadPage); 

export default UploadPageContainer; 
