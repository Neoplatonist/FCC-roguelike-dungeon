import React, {Component} from 'react'
import Stats from './components/stats'
import Entities from './helpers/entities'
import { checkBound } from './helpers/utils'
import stateTree from './stateTree'

import Modal from '../modal'

/**
 *  TODO: Build Map
 *
 *  1. Either an Array or a 2d Array
 *  2. Function renders this array to canvas objects
 * 
 * @class Main
 * @extends {Component}
**/

export default class Main extends Component {
  constructor(props) {
    super(props)
    Object.assign(this, stateTree)

    this.state = {
      dungeonLvl: 1,

      player: {
        damage: 1,
        health: 100,
        lvl: 0,
        weapon: 'fists',
        xp: 0
      },

      fog: true,
      modal: false,
      modalText: '',
      width: 900,
      height: 680
    }
  }

  componentDidMount() {
    this.entities = new Entities(this.doorSize, this.state.dungeonLvl)

    let player = {...this.state.player}
    let weapon = this.entities.createChar()
    player.damage = weapon.damage
    player.weapon = weapon.name
    this.setState({ player })

    this.canvas = document.getElementById('canvas')

    this.youEntity.x = this.canvas.width / 2
    this.youEntity.y = this.canvas.height / 2

    this.entities.initMap()
    let mapObj = this.entities.createMap(this.maps.size)
    this.maps.img.src = mapObj.data
    this.maps.loc[0] = (this.canvas.width / 2) - mapObj.initCoords[0]
    this.maps.loc[1] = (this.canvas.height / 2) - mapObj.initCoords[1]

    this.fog.src = this.entities.createFog(
      this.state.width, 
      this.state.height
    )

    // Moves Player
    window.addEventListener('keydown', this.playerMoveStart, false)
    window.addEventListener('keyup', this.playerMoveStop, false)

    this.context = this.canvas.getContext('2d')
    this.drawAll()
  }

  componentDidUpdate() {
    this.canvas = document.getElementById('canvas')
    this.context = this.canvas.getContext('2d')
  }

  createNewMap = () => {
    this.entities = new Entities(this.doorSize, this.state.dungeonLvl)
    this.entities.initMap()
    let mapObj = this.entities.createMap(this.maps.size)
    this.maps.img.src = mapObj.data
    this.maps.loc[0] = (this.canvas.width / 2) - mapObj.initCoords[0]
    this.maps.loc[1] = (this.canvas.height / 2) - mapObj.initCoords[1]
  }

  playerMoveStart = e => {
    let key = this.keyMap[e.keyCode]
    this.move[key] = true
  }

  playerMoveStop = e => {
    let key = this.keyMap[e.keyCode]
    this.move[key] = false
  }

  drawAll = () => {
    this.entities.background(this.context, 900, 680)
    // draw map
    this.context.drawImage(
      this.maps.img, 
      this.maps.loc[0], 
      this.maps.loc[1]
    )
    // draw fog
    if (this.state.fog) {
      this.context.drawImage(this.fog, 0,0)
    }

    this.entities.you(
      this.context, 
      this.youEntity.x,
      this.youEntity.y, 
      this.youEntity.dim
    )
    
    // this.context.fillStyle = 'red' 
    // this.context.font = '24px serif'
    // this.context.fillText(
    //   'x: ' + this.maps.loc[0] + ' y: ' + this.maps.loc[1],
    //   5, 20
    // )

    // this.entities.testPixel(
    //   this.context,
    //   this.youEntity.x + this.youEntity.dim + 1,
    //     this.youEntity.y - this.youEntity.dim + 1,
    //     1, this.youEntity.dim * 2 - 2
    // )
  }

  checkXP = player => {
    let lvl = player.lvl
    let hp = player.health

    if (player.lvl < 6 && player.xp >= 2200) {
      lvl = 6
      hp += Math.ceil(hp * (lvl * 0.10))
    }

    if (player.lvl < 5 && player.xp >= 1600) {
      lvl = 5
      hp += Math.ceil(hp * (lvl * 0.10))
    }

    if (player.lvl < 4 && player.xp >= 800) {
      lvl = 4
      hp += Math.ceil(hp * (lvl * 0.10))
    }

    if (player.lvl < 3 && player.xp >= 400) {
      lvl = 3
      hp += Math.ceil(hp * (lvl * 0.10))
    }

    if (player.lvl < 2 && player.xp >= 200) {
      lvl = 2
      hp += Math.ceil(hp * (lvl * 0.10))
    }

    if (player.lvl < 1 && player.xp >= 100) {
      lvl = 1
      hp += Math.ceil(hp * (lvl * 0.10))
    }

    return { lvl, hp }
  }

  battle = enemy => {
    this.locked = true
    let player = { ...this.state.player }

    do {
      enemy.health -= player.damage + (player.damage * (player.lvl * 0.1))
      player.health -= enemy.damage
    } while (enemy.health >= 0 && player.health >= 0)

    if (player.health <= 0) {
      // Player has died
      console.log('You have died')
      this.setState({
         modal: true,
         modalText: 'You have died.'
        })
    } else {
      // TODO:
      // Add XP from enemy to player
      // then check if player leveled up
      // Player levels will act as multipliers
      // for both more health and 
      // damage (in the form of critical hits?!?)
      player.xp += enemy.xp 
      let { lvl, hp } = this.checkXP(player)
      player.lvl = lvl
      player.health = hp
      this.setState({ player })

      if (enemy.dims === 30) {
        this.setState({
          modal: true,
          modalText: 'You have beaten the dungeon!'
        })
      }

      let mapObj = this.entities.createMap(this.maps.size)
      this.maps.img.src = mapObj.data
      this.locked = false
      this.drawAll()
    }
  }

  weapon = item => {
    console.log(item)
    this.locked = true
    let player = { ...this.state.player }

    player.damage += item.damage
    player.weapon = item.name

    this.setState({ player })
    let mapObj = this.entities.createMap(this.maps.size)
    this.maps.img.src = mapObj.data
    this.locked = false
    this.drawAll()
  }

  heal = item => {
    console.log(item)
    this.locked = true
    let player = { ...this.state.player }

    player.health += item.damage

    this.setState({ player })
    let mapObj = this.entities.createMap(this.maps.size)
    this.maps.img.src = mapObj.data
    this.locked = false
    this.drawAll()
  }

  checkSquare = data => {
    // red = 255, 0, 0, 255
    for (let i = 0; i < data.length; i += 4) {
      if (
        data[i + 0] === 255 &&
        data[i + 1] === 0 &&
        data[i + 2] === 0 &&
        data[i + 3] === 255
      ) {
        // starts battle system
        this.battle(
          this.entities.checkBattle(
            this.maps.loc[0], 
            this.maps.loc[1], 
            this.canvas
          )
        )
        // window.requestAnimationFrame(this.animation)
        break
      }
  
      // yellow =  255, 165, 0, 255
      if (
        data[i + 0] === 255 &&
        data[i + 1] === 165 &&
        data[i + 2] === 0 &&
        data[i + 3] === 255
      ) {
        console.log('picking up a weapon')
        this.weapon(
          this.entities.checkItem(
            this.maps.loc[0],
            this.maps.loc[1],
            'orange',
            this.canvas
          )
        )
        break
      }
  
      // green = 0, 128, 0, 255
      if (
        data[i + 0] === 0 &&
        data[i + 1] === 128 &&
        data[i + 2] === 0 &&
        data[i + 3] === 255
      ) {
        // adds health
        console.log('picking up a heal')
        this.heal(
          this.entities.checkItem(
            this.maps.loc[0],
            this.maps.loc[1],
            'green',
            this.canvas
          )
        )
        break
      }

      // purple = 128, 0, 128, 255
      if (
        data[i + 0] === 128 &&
        data[i + 1] === 0 &&
        data[i + 2] === 128 &&
        data[i + 3] === 255
      ) {
        // goes to next level
        console.log('entering portal')
        this.setState({ dungeonLvl: this.state.dungeonLvl + 1 })

        this.createNewMap(
          this.entities.checkItem(
            this.maps.loc[0],
            this.maps.loc[1],
            'purple',
            this.canvas
          )
        )
        break
      }
    }
  }

  update = () => {
    if (this.move.up) {
      let data = this.context.getImageData(
        this.youEntity.x - this.youEntity.dim + 1,
        this.youEntity.y - this.youEntity.dim - 1,
        this.youEntity.dim * 2 - 2, 1
      ).data

      if (checkBound(data)) {
        this.maps.loc[1] += this.speed
      } else {
        // check if entity
        this.checkSquare(data)
      }
    }

    if (this.move.down) {
      let data = this.context.getImageData(
        this.youEntity.x - this.youEntity.dim + 1,
        this.youEntity.y + this.youEntity.dim + 1,
        this.youEntity.dim * 2 - 2, 1
      ).data

      if (checkBound(data)) {
        this.maps.loc[1] -= this.speed
      } else {
        // check if entity
        this.checkSquare(data)
      }
    }

    if (this.move.left) {
      let data = this.context.getImageData(
        this.youEntity.x - this.youEntity.dim - 1,
        this.youEntity.y - this.youEntity.dim + 1,
        1, this.youEntity.dim * 2 - 2
      ).data

      if (checkBound(data)) {
        this.maps.loc[0] += this.speed
      } else {
        // check if entity
        this.checkSquare(data)
      }
    }

    if (this.move.right) {
      let data = this.context.getImageData(
        this.youEntity.x + this.youEntity.dim + 1,
        this.youEntity.y - this.youEntity.dim + 1,
        1, this.youEntity.dim * 2 - 2
      ).data

      if (checkBound(data)) {
        this.maps.loc[0] -= this.speed
      } else {
        // check if entity
        this.checkSquare(data)
      }
    }
  }

  animation = () => {
    if (!this.locked) {
      this.update()
      this.drawAll()
      window.requestAnimationFrame(this.animation)
    }
  }

  handleStart = e => {
    e.preventDefault()
    this.locked = false
    this.drawAll()
    window.requestAnimationFrame(this.animation)
  }

  handleStop = e => {
    e.preventDefault()
    this.locked = true
  }

  handleModal = () => {
    if (this.state.modal === true) {
      return <Modal text={this.state.modalText} />
    }
  }

  handleFog = e => {
    this.setState({ fog: !this.state.fog })
  }

  render() {
    return (
      <main>

        { this.handleModal() }

        <h4 className="notes">Press start and use W,A,S,D keys to move.</h4>
        <h4 className="notes">
          <ul>
            <li id="enemy">Enemy</li>
            <li id="health">Health</li>
            <li id="weapon">Weapon</li>
            <li id="portal">Portal</li>
          </ul>
        </h4>

        <Stats 
          fog={this.state.fog}
          hp={this.state.player.health}
          xp={this.state.player.xp}
          dmg={this.state.player.damage}
          weapon={this.state.player.weapon}
          lvl={this.state.player.lvl}
          dungeonLvl={this.state.dungeonLvl}
          changeFog={this.handleFog}
        />

        <canvas 
          id="canvas"
          // ref={el => this.canvas = el}
          width={this.state.width} 
          height={this.state.height}
        />

        <div className="controls">
          <button onClick={this.handleStart}>Start</button>
          <button onClick={this.handleStop}>Stop</button>
        </div>
      </main>
    )
  }
}