import React, {Component} from 'react'
import Entities from './helpers/entities'
import { checkBound } from './helpers/utils'
import stateTree from './stateTree'

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
    Object.assign(this, stateTree)

    this.state = {
      width: 900,
      height: 680
    }
  }

  componentDidMount() {
    this.entities = new Entities()

    this.youEntity.x = this.canvas.width / 2
    this.youEntity.y = this.canvas.height / 2

    // this.img.src = this.entities.createMap(this)

    let mapObj = this.entities.createMap2(this.maps.size)
    this.maps.img.src = mapObj.data
    this.maps.loc[0] = (this.canvas.width / 2) - mapObj.initCoords[0]
    this.maps.loc[1] = (this.canvas.height / 2) - mapObj.initCoords[1]

    this.fog.src = this.entities.createFog(this.state.width, this.state.height)

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
    this.entities.background(this.context, this.state.width, this.state.height)
    // draw map
    this.context.drawImage(this.maps.img, this.maps.loc[0], this.maps.loc[1])
    // draw fog
    // this.context.drawImage(this.fog, 0,0)

    this.entities.you(
      this.context, 
      this.youEntity.x,
      this.youEntity.y, 
      this.youEntity.r
    )
    
    this.context.fillStyle = 'red' 
    this.context.font = '24px serif'
    this.context.fillText(
      'x: ' + this.maps.loc[0] + ' y: ' + this.maps.loc[1],
      5, 20
    )
  } 


  update = () => {
    if (this.move.up) {
      let data = this.context.getImageData(
        this.youEntity.x,
        this.youEntity.y - this.youEntity.r -1,
        1,1
      ).data

      // if (checkBound(data)) {
        this.maps.loc[1] += this.speed
      // }
    }

    if (this.move.down) {
      let data = this.context.getImageData(
        this.youEntity.x,
        this.youEntity.y + this.youEntity.r +1,
        1,1
      ).data

      // if (checkBound(data)) {
        this.maps.loc[1] -= this.speed
      // }
    }

    if (this.move.left) {
      let data = this.context.getImageData(
        this.youEntity.x - this.youEntity.r -2,
        this.youEntity.y,
        1,1
      ).data

      // if (checkBound(data)) {
        this.maps.loc[0] += this.speed
      // }
    }

    if (this.move.right) {
      let data = this.context.getImageData(
        this.youEntity.x + this.youEntity.r +1,
        this.youEntity.y,
        1,1
      ).data

      // if (checkBound(data)) {
        this.maps.loc[0] -= this.speed
      // }
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