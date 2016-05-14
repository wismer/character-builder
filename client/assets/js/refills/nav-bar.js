import React from 'react';
import RefillsBreadcrumbs from './breadcrumbs';

export default React.createClass({
  render() {
    return (
      <header className="centered-navigation" role="banner">
        <div className="centered-navigation-wrapper">
          <a href="javascript:void(0)" className="mobile-logo">
            <img src="https://raw.githubusercontent.com/thoughtbot/refills/master/source/images/placeholder_logo_3_dark.png" alt="Logo image"/>
          </a>
          <a href="javascript:void(0)" id="js-centered-navigation-mobile-menu" className="centered-navigation-mobile-menu">MENU</a>

          <RefillsBreadcrumbs />
        </div>
      </header>
    );
  }
});