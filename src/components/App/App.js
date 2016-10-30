import React, {
  Component,
  PropTypes
} from 'react';
import { connect } from 'react-redux';
import pathHelper from '../../utils/pathHelper';
import Header from '../Header/Header';
import LoginModal from '../Auth/LoginModal';

class App extends Component {
  render() {
    const path = pathHelper.getBasePath(this.props.location.pathname);

    return (
      <div>
        <Header pathname={path}/>

        <div className="content-wrapper">
          {this.props.children}
        </div>

        <LoginModal isLoggingIn={this.props.isLoggingIn}/>
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.element,
  isLoggingIn: PropTypes.bool.isRequired,
  location: PropTypes.object.isRequired,
};

function mapStateToProps(state, ownProps) {
  return {
    isLoggingIn: state.auth.isLoggingIn,
    location: ownProps.location
  };
}

export default connect(mapStateToProps)(App);
