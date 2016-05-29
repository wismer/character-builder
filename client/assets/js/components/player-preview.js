import React, { Component } from 'react';

/*
  <BasicInfo></BasicInfo>
  <Perks></Perks>
  <Skills></Skills>
  <Traits></Traits>
  <Attributes></Attributes>
*/

const sampleData = {
  perks: [
    {name: 'dwarven toughness', effect: '+1 hp per level'},
    {name: 'dwarven resilience', effect: 'poison resist'}
  ],

  skills: [
    { name: 'medicine', proficient: false }
  ]
}

export default React.createClass({
  render() {
    var perks = sampleData.perks.map(perk => {
      return <div className='perk' key={perk.name}>{perk.name}</div>
    });
    return (
      <div id='player-dashboard'>
        player dashboard goes here
        <div id='player-perks'>
          {perks}
        </div>
        <div id='player-skills'>skills</div>
        <div id='player-traits'>traits</div>
      </div>
    );
  }
});