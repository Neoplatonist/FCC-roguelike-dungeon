import React, {Component} from 'react'
import Entities from './entities'
import { checkBound } from './utils'
import Map from './maps.js'

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
  constructor() {
    super()

    this.canvas = ''
    this.context = ''
    this.interval = 0
    this.box = {
      loc: [0,0],
      size: [200,200]
    }
    this.box2 = {
      loc: [0,0],
      size: [40,201]
    }

    this.youEntity = {
      x: 0,
      y: 0,
      r: 10
    }
    this.speed = 5
    this.locked = true
    this.entities = 0
    this.img = 0
    this.map = {
      loc: [0,0],
      size: [1920,1080]
    }

    this.keyMap = {
      87: 'up',
      83: 'down',
      65: 'left',
      68: 'right'
    }

    this.move = {
      up: false,
      down: false,
      left: false,
      right: false
    }

    this.state = {
      width: 900,
      height: 680
    }
  }

  componentDidMount() {
    this.entities = new Entities()
    this.maps = new Map()

    this.youEntity.x = this.canvas.width / 2
    this.youEntity.y = this.canvas.height / 2
    
    this.box.loc = [
      (this.youEntity.x) - (this.box.size[0] / 2),
      (this.youEntity.y) - (this.box.size[1] / 2)
    ]
    this.box2.loc = [
      this.box.loc[0] + this.box.size[0] - this.box2.size[0],
      this.box.loc[1] - this.box2.size[1] + 1
    ]

    this.img = new Image()
    this.img.src = this.entities.createMap(this.map.size, this.box, this.box2)

    this.maps.init()

    // Moves Player
    window.addEventListener('keydown', this.playerMoveStart, false)
    window.addEventListener('keyup', this.playerMoveStop, false)

    this.context = this.canvas.getContext('2d')
    this.drawAll()
  }

  playerMoveStart = (e) => {
    let key = this.keyMap[e.keyCode]
    this.move[key] = true
  }

  playerMoveStop = (e) => {
    let key = this.keyMap[e.keyCode]
    this.move[key] = false
  }

  drawAll = () => {
    this.entities.background(this, this.state.width, this.state.height)
    this.context.drawImage(this.img, this.map.loc[0], this.map.loc[1])
    this.entities.you(this, this.youEntity.x, this.youEntity.y, this.youEntity.r)
  } 


  update = () => {
    if (this.move.up) {
      let data = this.context.getImageData(
        this.youEntity.x,
        this.youEntity.y - this.youEntity.r -1,
        1,1
      ).data

      if (checkBound(data)) {
        this.map.loc[1] += this.speed
      }
    }

    if (this.move.down) {
      let data = this.context.getImageData(
        this.youEntity.x,
        this.youEntity.y + this.youEntity.r +1,
        1,1
      ).data

      if (checkBound(data)) {
        this.map.loc[1] -= this.speed
      }
    }

    if (this.move.left) {
      let data = this.context.getImageData(
        this.youEntity.x - this.youEntity.r -2,
        this.youEntity.y,
        1,1
      ).data

      if (checkBound(data)) {
        this.map.loc[0] += this.speed
      }
    }

    if (this.move.right) {
      let data = this.context.getImageData(
        this.youEntity.x + this.youEntity.r +1,
        this.youEntity.y,
        1,1
      ).data

      if (checkBound(data)) {
        this.map.loc[0] -= this.speed
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

  handleStart = (e) => {
    e.preventDefault()
    this.locked = false
    this.drawAll()
    window.requestAnimationFrame(this.animation)
  }

  handleStop = (e) => {
    e.preventDefault()
    this.locked = true
  }

  render() {
    return (
      <main>
        <canvas 
          ref={el => this.canvas = el}
          width={this.state.width} 
          height={this.state.height}
        />

        <button onClick={this.handleStart}>Start</button>
        <button onClick={this.handleStop}>Stop</button>
      </main>
    )
  }
}