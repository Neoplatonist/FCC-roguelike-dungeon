import React, {Component} from 'react'

import { connect } from 'react-redux'
// import { 

// } from '../../redux/actions'

class Main extends Component {
  render() {
    return (
      <main>
        <canvas />
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