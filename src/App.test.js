import React from 'react'
import { render } from 'react-dom'
import App from './App'
import { Provider } from 'react-redux'

import store from './redux/store'
// const canvasMock = require('jest-canvas-mock')

function mockCanvas (window) {
  window.HTMLCanvasElement.prototype.getContext = function () {
      return {
          fillRect: function() {},
          clearRect: function(){},
          getImageData: function(x, y, w, h) {
              return  {
                  data: new Array(w*h*4)
              };
          },
          putImageData: function() {},
          createImageData: function(){ return []},
          setTransform: function(){},
          drawImage: function(){},
          save: function(){},
          fillText: function(){},
          restore: function(){},
          beginPath: function(){},
          moveTo: function(){},
          lineTo: function(){},
          closePath: function(){},
          stroke: function(){},
          translate: function(){},
          scale: function(){},
          rotate: function(){},
          arc: function(){},
          fill: function(){},
          measureText: function(){
              return { width: 0 };
          },
          transform: function(){},
          rect: function(){},
          clip: function(){},
      };
  }

  window.HTMLCanvasElement.prototype.toDataURL = function () {
      return '';
  }
}

  
it('renders without crashing', () => {
  const window = document.defaultView
  mockCanvas(window)
  const div = document.createElement('div')

  render(
    <Provider store={store()}>
      <App />
    </Provider>, 
    div
  )
})
