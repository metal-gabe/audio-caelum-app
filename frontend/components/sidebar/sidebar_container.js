import { connect } from 'react-redux';
import { requestAllSongsAC } from '../../actions/song_actions';
import Sidebar from './sidebar';

const mapStateToProps = ({ entities, session, errors }) => {
  return ({
    allSongs: Object.values(entities.songs),
  });
};

const mapDispatchToProps = (dispatch) => {
  return ({
    requestAllSongs: () => dispatch(requestAllSongsAC()),
  });
};

const SidebarContainer =
  connect(mapStateToProps, mapDispatchToProps)(Sidebar);
export default SidebarContainer;
