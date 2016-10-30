import React, {
  PropTypes,
  Component,
} from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions/auth.actions';
import cx from 'classnames';

class LoginModal extends Component {
  render() {
    return (
      <div className="container">
        {/*<!-- Modal -->*/}
        <div
          className={cx({"modal fade": true, "in": this.props.isLoggingIn })}
          id="myModal"
          role="dialog"
          style={this.props.isLoggingIn ? {display: "block"} : {display: "none"}}>
          <div className="modal-dialog">
            {/*<!-- Modal content-->*/}
            <div className="modal-content">
              <div className="modal-header">
                <button type="button" className="close" onClick={this.props.authGoogleCancel}>&times;</button>
                <h4 className="modal-title">Authorizing with Google...</h4>
              </div>
              <div className="modal-body">
                <p>If you deny Google login or the response is taking too long, cancel below.<br/>Make sure you are not blocking the Google pop-up.</p>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-default" onClick={this.props.authGoogleCancel}>Cancel Login</button>
              </div>
            </div>
          </div>
        </div>
        {this.props.isLoggingIn && <div className="modal-backdrop fade in" />}
      </div>
    );
  }
}

LoginModal.propTypes = {
  authGoogleCancel: PropTypes.func.isRequired,
  isLoggingIn: PropTypes.bool.isRequired
};
LoginModal.defaultProps = {};

export default connect(null, actions)(LoginModal);
