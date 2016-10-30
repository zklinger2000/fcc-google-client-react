import React, {
  Component,
  PropTypes,
} from 'react';
import Helmet from 'react-helmet';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import * as actions from '../../actions/auth.actions';

class LogoutPage extends Component {
  componentWillMount() {
    this.props.logoutUser();
  }

  render() {
    return (
      <div className="container">
        <Helmet
          title="FCC Google Client"
          titleTemplate="%s | Logout"
        />
        <h1>Sorry to see you go...</h1>
        <div className="jumbotron text-center">
          <h2>return to <Link to="/">Home page</Link></h2>
        </div>
      </div>
    );
  }
}

LogoutPage.propTypes = {
  logoutUser: PropTypes.func.isRequired
};
LogoutPage.defaultProps = {};

export default connect(null, actions)(LogoutPage);
