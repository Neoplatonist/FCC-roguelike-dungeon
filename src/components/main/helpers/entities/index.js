import { entityRect, entityCirc } from '../utils'
import Map from '../maps'

export default class Entities {
  constructor() {
    this.maps = new Map()
  }

  background(context, x,y) {
    // Background
    entityRect(context, 0, 0, x, y, 'black')
  }

  you(context, x,y, r) {
    // Lil'U
    entityCirc(context, x, y, r, 'green')
  }

  testMap(context, loc, size) {
    entityRect(context, loc[0], loc[1], size[0], size[1], 'white')
  }

  testPixel(context, x,y, r) {
    entityCirc(context, x,y,r, 'red')
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

    console.log((that.youEntity.x) - (box.size[0] / 2))
    console.log((that.youEntity.y) - (box.size[1] / 2))

    box.loc = [
      (that.youEntity.x) - (box.size[0] / 2),
      (that.youEntity.y) - (box.size[1] / 2)
    ]
    box2.loc = [
      box.loc[0] + box.size[0] - box2.size[0],
      box.loc[1] - box2.size[1] + 1
    ]

    entityRect(
      this.context, 
      box.loc[0], box.loc[1], 
      box.size[0], box.size[1], 
      'white'
    )

    entityRect(
      this.context, 
      box2.loc[0], box2.loc[1], 
      box2.size[0], box2.size[1], 
      'white'
    )

    return this.canvas.toDataURL('image/png')
  }

  createMap2(size) {
    this.maps.init()
    let all = this.maps.everything()

    let canvas = document.createElement('canvas')
    canvas.id = 'tmp'
    document.body.appendChild(canvas)

    canvas = document.getElementById('tmp')
    let ctx = canvas.getContext('2d')

    canvas.width = size[0]
    canvas.height = size[1]

    for (let i = 0; i < all.rooms.length; i++) {
      entityRect(
        ctx, 
        all.rooms[i].locX * 10, all.rooms[i].locY * 10, 
        all.rooms[i].dimX * 10, all.rooms[i].dimY * 10,
        'white'
      )
    }

    for (let i = 0; i < all.enemies.length; i++) {
      entityRect(
        ctx, 
        all.enemies[i].locX * 10, all.enemies[i].locY * 10, 
        15, 15,
        all.enemies[i].color
      )
    }

    for (let i = 0; i < all.items.length; i++) {
      entityRect(
        ctx, 
        all.items[i].locX * 10, all.items[i].locY * 10, 
        15, 15,
        all.items[i].color
      )
    }

    let data = canvas.toDataURL('image/png')
    document.body.removeChild(canvas)

    return data
  }
}


