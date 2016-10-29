import React, {
  PropTypes,
} from 'react';
import { Link, IndexLink } from 'react-router';
import SigninButton from '../Auth/GoogleLoginButton';
import classNames from 'classnames';

const Navbar = (props) => {
  return (
    <nav className="navbar navbar-inverse">
      <div className="container-fluid">
        <div className="navbar-header">
          <button type="button" className="navbar-toggle collapsed" onClick={props.toggleMenu}>
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar"/>
            <span className="icon-bar"/>
            <span className="icon-bar"/>
          </button>
          <IndexLink to="/" className="navbar-brand" onClick={props.handleClickLink}>FCC Google Client | React</IndexLink>
        </div>
        <div className={classNames({"collapse": props.collapse, "navbar-collapse": true, "collapsing": props.collapsing})} id="bs-example-navbar-collapse-1">
          <ul className="nav navbar-nav">
            <li
              className={props.pathname === 'home' ? 'active' : null}
              onClick={props.handleClickLink}>
              <IndexLink to="/">Home</IndexLink>
            </li>
          </ul>
          <ul className="nav navbar-nav navbar-right">
            <li className={classNames({"hidden": !props.authenticated, "hidden-xs": true})}>
              <p className="navbar-text">{props.name}</p>
            </li>
            <li className={!props.authenticated ? "hidden" : null}>
              <Link to="/logout">Logout</Link>
            </li>
            <li className={props.authenticated ? "hidden" : null}>
              <SigninButton />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

Navbar.propTypes = {
  toggleMenu: PropTypes.func.isRequired,
  handleClickLink: PropTypes.func.isRequired,
  collapse: PropTypes.bool.isRequired,
  collapsing: PropTypes.bool.isRequired,
  pathname: PropTypes.string.isRequired,
  authenticated: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired
};

export default Navbar;
