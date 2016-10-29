import React, {
  Component,
  PropTypes
} from 'react';
import { connect } from 'react-redux';
import pathHelper from '../../utils/pathHelper';
import Header from '../Header/Header';

class App extends Component {
  render() {
    const path = pathHelper.getBasePath(this.props.location.pathname);

    return (
      <div>
        <Header pathname={path}/>
        {/*<Wallpaper themes={[{name: 'home'}]} current={{name: path}} />*/}
        <div className="content-wrapper">
          {this.props.children}
        </div>
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.element,
  location: PropTypes.object.isRequired,
};

function mapStateToProps(state, ownProps) {
  return {
    location: ownProps.location
  };
}

export default connect(mapStateToProps)(App);
