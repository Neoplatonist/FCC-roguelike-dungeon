import { entityRect, entityCirc } from '../utils'
import Map from '../maps'

export default class Entities {
  constructor(doorSize, mapLvl) {
    this.maps = new Map(doorSize, mapLvl)
  }

  background(context, x,y) {
    // Background
    entityRect(context, 0,0, x,y, 'black')
  }

  you(context, x,y, r) {
    // Lil'U
    entityCirc(context, x,y, r, 'green')
    // entityRect(context, x,y, r,r, 'green')
  }

  testMap(context, loc, size) {
    entityRect(context, loc[0], loc[1], size[0], size[1], 'white')
  }

  testPixel(context, x,y, dimX,dimY) {
    // entityCirc(context, x,y,r, 'red')
    entityRect(context, x,y, dimX,dimY, 'red')
  }

  checkBattle(x,y, canvas) {
    let [ locX, locY ] = [ canvas.width / 2, canvas.height / 2 ]
    let arrID = 0
    let currDist = 999999999
    let all = this.maps.everything()
    let enemies = all.enemies.slice()

    enemies.forEach((v, k) => {
      let enmi = {
        dimX: 15,
        dimY: 15,
        locX: locX - v.locX * 10,
        locY: locY - v.locY * 10
      }

      // Pythagorean Theorem
      let a = Math.abs(x - enmi.locX)
      let b = Math.abs(y - enmi.locY)
      let c = Math.hypot(a, b)

      if (c < currDist) {
        currDist = c
        arrID = k
      }
    })

    let enmi = enemies.splice(arrID, 1)
    this.maps.updater('enemies', enemies)
    return enmi[0]
  }

  checkItem(x,y, color, canvas) {
    let [ locX, locY ] = [ canvas.width / 2, canvas.height / 2 ]
    let arrID = undefined
    let currDist = 999999999
    let all = this.maps.everything()
    let items = all.items.slice()

    console.log(all.items)
    console.log(items)

    items.forEach((v, k) => {
      let item = {
        dimX: 15,
        dimY: 15,
        locX: locX - v.locX * 10,
        locY: locY - v.locY * 10
      }

      if (v.color === color) {
        console.log(v)
        // Pythagorean Theorem
        let a = Math.abs(x - item.locX)
        let b = Math.abs(y - item.locY)
        let c = Math.hypot(a, b)

        if (c < currDist) {
          currDist = c
          arrID = k
        }
      }
    })

    console.log(arrID)

    let item = items.splice(arrID, 1)
    this.maps.updater('item', items)

    return item[0]
  }

  createChar() {
    return this.maps.startWeapon()
  }

  initMap() {
    this.maps.init()
  }

  createFog(x, y) {
    let canvas = document.createElement('canvas')
    canvas.id = 'tmp2'
    document.body.appendChild(canvas)

    canvas = document.getElementById('tmp2')
    let ctx = canvas.getContext('2d')

    canvas.width = x
    canvas.height = y

    // background
    entityRect(ctx, 0, 0, x,y, 'black')

    // shape
    ctx.globalCompositeOperation = 'xor'
    entityCirc(ctx, x/2,y/2, 100, '')

    let data = canvas.toDataURL('image/png')
    document.body.removeChild(canvas)

    return data
  }

  createMap(size) {
    let all = this.maps.everything()

    let canvas = document.createElement('canvas')
    canvas.id = 'tmp'
    document.body.appendChild(canvas)

    canvas = document.getElementById('tmp')
    let ctx = canvas.getContext('2d')

    canvas.width = size[0] + 500
    canvas.height = size[1] + 500

    entityRect(ctx, 0, 0, canvas.width, canvas.height, 'black')

    all.rooms.forEach((v, k) => {
      entityRect(
        ctx, 
        v.locX * 10, v.locY * 10, 
        v.dimX * 10, v.dimY * 10,
        'white'
      )

      ctx.fillStyle = 'white' 
      ctx.font = '24px serif'
      ctx.fillText(
        v.id,
        v.locX * 10 + (v.dimX / 2) * 10,
        v.locY * 10 + (v.dimY / 2) * 10
      )
      
      v.doors.forEach((i, j) => {
        if (i != undefined || i != null) {
          entityRect(
            ctx,
            i.coords[0] * 10, i.coords[1] * 10, 
            i.doorSize[0] * 10, i.doorSize[1] * 10,
            'white'
          )
        }
      })
    })

    console.log('enemies')
    console.log(all.enemies)
    all.enemies.forEach((v, k) => {
      entityRect(
        ctx, 
        v.locX * 10, v.locY * 10, 
        v.dims, v.dims,
        v.color
      )
    })

    all.items.forEach((v, k) => {
      entityRect(
        ctx, 
        v.locX * 10, v.locY * 10, 
        15, 15,
        v.color
      )
    })

    let data = canvas.toDataURL('image/png')
    document.body.removeChild(canvas)

    return {
      data: data,
      initCoords: [
        all.rooms[0].locX * 10 + all.rooms[0].dimX * 10 / 2,
        all.rooms[0].locY * 10 + all.rooms[0].dimY * 10 / 2
      ]
    }
  }

  // createObjects() {
  //   let all = this.maps.everything()

  //   let canvas = document.createElement('canvas')
  //   canvas.id = 'tmp3'
  //   document.body.appendChild(canvas)

  //   canvas = document.getElementById('tmp3')
  //   let ctx = canvas.getContext('2d')

  //   canvas.width = size[0] + 500
  //   canvas.height = size[1] + 500

  //   all.enemies.forEach((v, k) => {
  //     entityRect(
  //       ctx, 
  //       v.locX, v.locY, 
  //       15, 15,
  //       v.color
  //     )
  //   })

  //   all.items.forEach((v, k) => {
  //     entityRect(
  //       ctx, 
  //       v.locX, v.locY, 
  //       15, 15,
  //       v.color
  //     )
  //   })

  //   let data = canvas.toDataURL('image/png')
  //   document.body.removeChild(canvas)

  //   return data
  // }
}


