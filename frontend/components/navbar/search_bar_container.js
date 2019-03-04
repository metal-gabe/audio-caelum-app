import { connect } from 'react-redux';
// import * as SearchApiUtil from '../../util/search_api_util';
import SearchBar from './search_bar';

const mapStateToProps = ({ entities, session }) => {
  const userId = session.id;
  return ({
    currentUser: entities.users[userId],
    loggedIn: Boolean(session.id),
  });
};
const mapDispatchToProps = (dispatch) => {
  return ({});
};

const SearchBarContainer =
  connect(mapStateToProps, mapDispatchToProps)(SearchBar);
export default SearchBarContainer;
