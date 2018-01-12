import React, {Component} from 'react'

import { connect } from 'react-redux'
// import { 

// } from '../../redux/actions'
import { background, you, testMap } from './entities'

/**
 *  TODO: Build Map
 *
 *  1. Either an Array or a 2d Array
 *  2. Function renders this array to canvas objects
 *  3. Function that takes the initial array and 
 *     use it to calculate boundaries.
 *  4. Use boundaries and check player position.
 * 
 * @class Main
 * @extends {Component}
**/

class Main extends Component {
  constructor() {
    super()

    this.canvas = ''
    this.context = ''
    this.interval = 0
    this.box = {
      loc: [0,0],
      size: [120,120]
    }

    this.youEntity = {
      loc: [0,0],
      r: 10
    }
    this.fps = 30
    this.locked = true

    this.state = {
      width: 900,
      height: 675
    }
  }

  componentDidMount() {
    this.context = this.canvas.getContext('2d')

    this.youEntity.loc = [this.canvas.width / 2, this.canvas.height / 2]
    this.box.loc = [
      (this.youEntity.loc[0]) - (this.box.size[0] / 2),
      (this.youEntity.loc[1]) - (this.box.size[1] / 2)
    ]
    this.drawAll()

    // Moves Player
    window.addEventListener('keydown', this.playerMoveStart, false)
  }

  playerMoveStart = (e) => {
    if (!this.locked) {
      // Moving Up ( W key )
      if (
        e.keyCode === 87 && 
        this.box.loc[1] < this.youEntity.loc[1] - this.youEntity.r
      ) {
        this.box.loc[1] += 5
      }

      // Moving Down ( S key )
      if (
        e.keyCode === 83 && 
        this.box.loc[1] + this.box.size[1] > this.youEntity.loc[1] + this.youEntity.r
      ) {
        this.box.loc[1] -= 5
      }

      // Moving Left ( A key )
      if (
        e.keyCode === 65 && 
        this.box.loc[0] < this.youEntity.loc[0] - this.youEntity.r
      ) {
        this.box.loc[0] += 5
      }

      // Moving Right ( D key )
      if (
        e.keyCode === 68 && 
        this.box.loc[0] + this.box.size[0] > 
          this.youEntity.loc[0] + this.youEntity.r
      ) {
        this.box.loc[0] -= 5
      }
    }
  }

  drawAll = () => {
    background(this, this.state.width, this.state.height)
    testMap(this, this.box.loc, this.box.size)
    you(this, this.youEntity.loc[0], this.youEntity.loc[1], this.youEntity.r)
  } 

  handleInterval = () => {
    this.locked = false
    this.interval = setInterval(() => {
      this.drawAll()
    }, 1000/this.fps)
  }

  handleIntervalClear = () => {
    this.locked = true
    clearInterval(this.interval)
  }

  render() {
    return (
      <main>
        <canvas 
          ref={el => this.canvas = el}
          width={this.state.width} 
          height={this.state.height}
        />

        <button onClick={this.handleInterval}>move box</button>
        <button onClick={this.handleIntervalClear}>clear</button>
      </main>
    )
  }
}

const mapStateToProps = (state, props) => {
  return {}
}

const mapDispatchToProps = (dispatch, props) => {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(Main)