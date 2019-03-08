import { connect } from 'react-redux';
import CommentsForm from './comments_form';

const mapStateToProps = (state) => {
  return ({});
};
const mapDispatchToProps = (dispatch) => {
  return ({});
};

const CommentsFormContainer =
  connect(mapStateToProps, mapDispatchToProps)(CommentsForm);
export default CommentsFormContainer;
