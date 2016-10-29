import React, {
  Component,
  PropTypes,
} from 'react';
import { connect } from 'react-redux';
import Navbar from './Navbar';
import './Header.scss';

class Header extends Component {
  constructor(props, context) {
    super(props, context);

    this.toggleMenu = this.toggleMenu.bind(this);
    this.handleClickLink = this.handleClickLink.bind(this);

    this.state = {
      collapse: true,
      collapsing: false,
    };
  }

  toggleMenu() {
    if (this.state.collapse) {
      this.setState({
        collapse: false
      });
    } else {
      this.setState({
        collapsing: true
      });
      setTimeout(() => {
        this.setState({
          collapsing: false,
          collapse: true
        });
      }, 300);
    }
  }

  handleClickLink() {
    if (!this.state.collapse) {
      this.toggleMenu();
    }
  }

  render() {
    return (
      <Navbar
        toggleMenu={this.toggleMenu}
        handleClickLink={this.handleClickLink}
        collapse={this.state.collapse}
        collapsing={this.state.collapsing}
        pathname={this.props.pathname}
        authenticated={this.props.authenticated}
        name={this.props.name}
      />
   );
  }
}

function mapStateToProps(state) {
  return {
    authenticated: state.auth.authenticated,
    name: state.auth.user && state.auth.user.name || ''
  };
}

Header.propTypes = {
  authenticated: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
  pathname: PropTypes.string.isRequired
};

export default connect(mapStateToProps)(Header);
