import { entityRect, entityCirc } from './utils'

export default class Entities {
  background(that, x,y) {
    // Background
    entityRect(that, 0, 0, x, y, 'black')
  }

  you(that, x,y, r) {
    // Lil'U
    entityCirc(that, x, y, r, 'green')
  }

  testMap(that, loc, size) {
    entityRect(that, loc[0], loc[1], size[0], size[1], 'white')
  }

  testPixel(that, x,y, r) {
    entityCirc(that, x,y,r, 'red')
  }

  createMap(that) {
    let canvas = document.createElement('canvas')
    canvas.id = 'tmp'
    document.body.appendChild(canvas)

    this.canvas = document.getElementById('tmp')
    this.context = this.canvas.getContext('2d')

    this.canvas.width = that.map.size[0]
    this.canvas.height = that.map.size[1]

    let box = {
      loc: [0,0],
      size: [200,200]
    }

    let box2 = {
      loc: [0,0],
      size: [40,201]
    }

    box.loc = [
      (that.youEntity.x) - (box.size[0] / 2),
      (that.youEntity.y) - (box.size[1] / 2)
    ]
    box2.loc = [
      box.loc[0] + box.size[0] - box2.size[0],
      box.loc[1] - box2.size[1] + 1
    ]

    entityRect(
      this, 
      box.loc[0], box.loc[1], 
      box.size[0], box.size[1], 
      'white'
    )

    entityRect(
      this, 
      box2.loc[0], box2.loc[1], 
      box2.size[0], box2.size[1], 
      'white'
    )

    return this.canvas.toDataURL('image/png')
  }
}


