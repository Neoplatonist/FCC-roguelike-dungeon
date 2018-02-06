import React, { Component } from 'react'

export default class Stats extends Component {
  render() {
    return (
      <ul id="stats">
        <li>HP: {this.props.hp}</li>
        <li>XP: {this.props.xp}</li>
        <li>Damage: {this.props.dmg}</li>
        <li>Weapon: {this.props.weapon}</li>
        <li>Level: {this.props.lvl}</li>
        <li>Dungeon Lvl: {this.props.dungeonLvl}</li>
      </ul>
    )
  }
}