import React, {
  Component,
  PropTypes,
} from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions/auth.actions';
import GoogleLogin from 'react-google-login';
import config from '../../../config';

class GoogleLoginButton extends Component {

  handleGoogleSuccess(response) {
    // Start Google Oauth process
    this.props.authGoogleLogin(response);
  }

  handleGoogleError(response) {
    this.props.authError(response);
  }

  render() {
    return (
      <div onClick={this.props.authGoogleRequest}>
        <GoogleLogin
          clientId={config.googleAuth.clientID}
          className="btn btn-primary"
          onSuccess={this.handleGoogleSuccess.bind(this)}
          onFailure={this.handleGoogleError.bind(this)}>

          <span>Sign in with <i className="fa fa-google fa-lg"/>oogle</span>
        </GoogleLogin>
      </div>
    );
  }
}

GoogleLoginButton.propTypes = {
  authGoogleRequest: PropTypes.func.isRequired,
  authGoogleLogin: PropTypes.func.isRequired,
  authError: PropTypes.func.isRequired
};
GoogleLoginButton.defaultProps = {};

export default connect(null, actions)(GoogleLoginButton);
