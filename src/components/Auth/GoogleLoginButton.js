import React, {
  Component,
  PropTypes,
} from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions/authentication';
import GoogleLogin from 'react-google-login';
import config from '../../../config';

// TODO: move clientID into a hidden config file
class GoogleLoginButton extends Component {
  handleGoogleResponse(response) {
    // Start Google Oauth process
    this.props.authGoogleLogin(response);
  }

  render() {
    return (
      <GoogleLogin
        clientId={config.googleAuth.clientID}
        className="btn btn-primary"
        onSuccess={this.handleGoogleResponse.bind(this)}
        onFailure={this.handleGoogleResponse.bind(this)}>

        <span>Sign in with <i className="fa fa-google fa-lg"/>oogle</span>
      </GoogleLogin>
    );
  }
}

GoogleLoginButton.propTypes = {
  authGoogleLogin: PropTypes.func.isRequired
};
GoogleLoginButton.defaultProps = {};

export default connect(null, actions)(GoogleLoginButton);
