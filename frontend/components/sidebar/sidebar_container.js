import { connect } from 'react-redux';
import Sidebar from './sidebar';

const mapStateToProps = ({ entities, session, errors }) => {
  return ({
    allSongs: Object.values(entities.songs),
  });
};

const mapDispatchToProps = (dispatch) => {
  return ({});
};

const SidebarContainer =
  connect(mapStateToProps, mapDispatchToProps)(Sidebar);
export default SidebarContainer;
