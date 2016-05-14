import React, { Component } from 'react';

/*
  <BasicInfo></BasicInfo>
  <Perks></Perks>
  <Skills></Skills>
  <Traits></Traits>
  <Attributes></Attributes>
*/

export default React.createClass({
  render() {
    return (
      <footer className='footer' role='contentinfo' id='player-dashboard'>
        player dashboard goes here
        <div className='footer-links'>
          <div id='player-attributes'>player attributes</div>
          <div id='player-perks'>perks</div>
          <div id='player-skills'>skills</div>
          <div id='player-traits'>traits</div>
        </div>
      </footer>
    );
  }
});