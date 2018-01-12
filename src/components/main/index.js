import React, {Component} from 'react'

import { connect } from 'react-redux'
// import { 

// } from '../../redux/actions'

import { entityRect, entityCirc } from './utils'

class Main extends Component {
  constructor() {
    super()

    this.canvas = ''
    this.context = ''
    this.interval = 0
    this.box = {
      loc: [0,0],
      size: [20,20]
    }
    this.fps = 60

    this.state = {
      width: 900,
      height: 675
    }
  }

  componentDidMount() {
    this.context = this.canvas.getContext('2d')
    this.canvas.width = this.state.width
    this.canvas.height = this.state.height

    this.drawAll()
  }

  background = () => {
    // Background
    entityRect(this, 0, 0, this.state.width, this.state.height, 'black')
  } 

  you = () => {
    // Lil'U
    entityCirc(this, this.state.width / 2, this.state.height / 2, 10, 'white')
  }

  test = () => {
    entityRect(
      this, 
      this.box.loc[0], this.box.loc[1], 
      this.box.size[0], this.box.size[1],
      'green'
    )
  }

  drawAll = () => {
    this.background()
    this.test()
    this.you()
  } 

  handleMoveBox = () => {
    this.interval = setInterval(() => {
      if (
        this.box.loc[0] < this.canvas.width - this.box.size[0] && 
        this.box.loc[1] < this.canvas.height - this.box.size[1]
      ) {
        this.box.loc[0] += 1
        this.box.loc[1] += 1

        this.drawAll()
      }
    }, 1000/this.fps)
  }

  handleMoveBoxClear = () => {
    clearInterval(this.interval)
  }

  render() {
    return (
      <main>
        <canvas 
          ref={el => this.canvas = el}
          // width={this.state.width} 
          // height={this.props.height}
        />

        <button onClick={this.handleMoveBox}>move box</button>
        <button onClick={this.handleMoveBoxClear}>clear</button>
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