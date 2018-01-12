import React, {Component} from 'react'

import { connect } from 'react-redux'
// import { 

// } from '../../redux/actions'

class Main extends Component {
  constructor() {
    super()

    this.canvas = ''
    this.context = ''

    this.state = {
      width: 900,
      height: 675
    }
  }

  componentDidMount() {
    this.context = this.canvas.getContext('2d')
    this.canvas.width = this.state.width
    this.canvas.height = this.state.height
    // Background
    this.entityRect(0, 0, this.state.width, this.state.height, 'black')
  }

  entityRect = (x,y, width,height, color) => {
    this.context.fillStyle = color
    this.context.fillRect(x,y, width,height)
  }

  entityCirc = (x,y, radius, color) => {
    this.context.fillStyle = color
    this.context.beginPath()
    this.context.arc(x,y, radius, 0,Math.PI*2, true)
    this.context.fill()
  }

  render() {
    return (
      <main>
        <canvas 
          ref={el => this.canvas = el}
          // width={this.state.width} 
          // height={this.props.height}
        />
      </main>
    )
  }
}

const mapStateToProps = (state, props) => {
  return {
   
  }
}

const mapDispatchToProps = (dispatch, props) => {
  return {

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main)