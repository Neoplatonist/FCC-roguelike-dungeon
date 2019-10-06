import React, { Component } from 'react'

export default class Modal extends Component {
  render() {
    return (
      <div id="modal">
        <h3>{ this.props.text }</h3>

        <button 
          onClick={ e => window.location.reload(true) }>
          Play Again?
        </button>
      </div>
    )
  }
}