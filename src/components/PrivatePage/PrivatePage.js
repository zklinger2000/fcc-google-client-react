import React, {
  Component,
  PropTypes,
} from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions/auth.actions';

class PrivatePage extends Component {
  componentWillMount() {
    this.props.fetchMessage();
  }

  render() {
    return (
      <div className="container">
        <div className="jumbotron">{this.props.message}</div>
        <p>If the above message is "Super secret code is ABC123", then you've successfully
        made a Google+ authorized request to the FCC Google API</p>
      </div>
    );
  }
}

PrivatePage.propTypes = {
  fetchMessage: PropTypes.func.isRequired,
  message: PropTypes.string.isRequired
};

function mapStateToProps(state) {
  return {
    message: state.auth.message || 'Loading...'
  };
}

export default connect(mapStateToProps, actions)(PrivatePage);
