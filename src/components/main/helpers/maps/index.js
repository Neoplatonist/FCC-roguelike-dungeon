import { rand } from '../utils'
import Item from '../items'

const mapSize = [192, 108] // 1920 x 1080 
// const mapSize = [20, 30]
let roomObj = {
  dimX: 0, 
  dimY: 0,
  doors: [],
  locX: 0, 
  locY: 0,
  id: 0,
  type: ''
}

export default class Map {
  constructor() {
    [ this.min , this.max ] = [ 8, 30 ]

    this.item = new Item()
    this.items = []

    this.hallPad = 20
    this.limit = 100
    this.mapArr = []
    this.prevRoom = {
      loc: [],
      doorLoc: []
    }
    this.recurNum = 0
  }

  init() {
    for (let i = 0; i < 40; i++) {
      this.createRoom(i)
    }

    this.spacer()

    this.item.createHealth()
    this.item.createWeapon(1)


    return this.mapArr
  }
  
  checkIntersect(a1,a2, b1,b2) {
    // get the min and max a && b
    // let a1 = Math.min(a1,a2)
    // let a2 = Math.max(a1,a2)
    // let b1 = Math.min(b1,b2)
    // let b2 = Math.max(b1,b2)

    if (a1 <= b2 && a2 >= b1) {
      // calc how much the ranges intersect
      let dist1 = b2 - a1
      let dist2 = a2 - b1

      if (dist1 <= dist2) {
        // x shift up
        // y shift down
        return dist1
      } else {
        // x shift down
        // y shift up
        return dist2 *-1
      }
    } else {
      // no problems
      // BUT we should make sure there is 
      // enough spacing around the sides for 
      // running our paths
      return 0
    }
  }

  createRoom(i) {
    let room = { ...roomObj }

    room = {
      dimX: rand(this.min, this.max),
      dimY: rand(this.min, this.max),
      locX: rand(30, mapSize[0] -30),
      locY: rand(30, mapSize[1] -30),
      id: i
    }

    if (room.id === 0) {
      room.type = 'start'
    }

    this.mapArr.push(room)
  }

  spacer() {
    let recur = false
    this.recurNum++

    for (let i = 0; i < this.mapArr.length; i++) {
      for (let j = 0; j < this.mapArr.length; j++) {
        // Get the first room
        let a = {
          x1: this.mapArr[i].locX,
          y1: this.mapArr[i].locY,
          x2: this.mapArr[i].locX + this.mapArr[i].dimX,
          y2: this.mapArr[i].locY + this.mapArr[i].dimY
        }

        // Get the second room
        let b = {
          x1: this.mapArr[j].locX,
          y1: this.mapArr[j].locY,
          x2: this.mapArr[j].locX + this.mapArr[j].dimX,
          y2: this.mapArr[j].locY + this.mapArr[j].dimY
        }

        // let aObj = { ...roomObj }
        // let bObj = { ...roomObj }

        // aObj = {
        //   dimX: 20, 
        //   dimY: 20,
        //   locX: 35, 
        //   locY: 24
        // }

        // // 35 + 20 = x = 55
        // // 24 + 20 = y = 44
        // bObj = {
        //   dimX: 17, 
        //   dimY: 21,
        //   locX: 55, 
        //   locY: 40
        // }

        // let a = {
        //   x1: aObj.locX,
        //   y1: aObj.locY,
        //   x2: aObj.locX + aObj.dimX,
        //   y2: aObj.locY + aObj.dimY
        // }

        // let b = {
        //   x1: bObj.locX,
        //   y1: bObj.locY,
        //   x2: bObj.locX + bObj.dimX,
        //   y2: bObj.locY + bObj.dimY
        // }

        // this.mapArr.push(aObj)
        // this.mapArr.push(bObj)

        // console.log(this.mapArr[i])
        // console.log(this.mapArr[j])

        // Check for intersects
        let xCol = this.checkIntersect(a.x1, a.x2, b.x1, b.x2)
        let yCol = this.checkIntersect(a.y1, a.y2, b.y1, b.y2)

        if (xCol !== 0 && yCol !== 0) {
          recur = true

          if (Math.abs(xCol) < Math.abs(yCol)) {

            let dist = Math.floor((Math.abs(xCol) + this.hallPad) / 2)

            // xCol needs to shift
            if (xCol < 0) {
              // shift left
              this.mapArr[i].locX -= dist
              this.mapArr[j].locX += dist
            } else {
              // shift right
              this.mapArr[i].locX += dist
              this.mapArr[j].locX -= dist
            }
            // if (xCol < 0) {
            //   this.mapArr[1].locX += Math.abs(xCol) + this.hallPad
            // } else {
            //   this.mapArr[1].locX -= xCol + this.hallPad
            // }
          } else {
            // yCol needs to shift
            let dist = Math.floor((Math.abs(yCol) + this.hallPad) / 2)

            if (yCol < 0) {
              // shift up
              this.mapArr[i].locY -= dist
              this.mapArr[j].locY += dist
            } else {
              // shift down
              this.mapArr[i].locY += dist
              this.mapArr[j].locY -= dist
            }
            // if (yCol < 0) {
            //   this.mapArr[1].locY += Math.abs(yCol) + this.hallPad
            // } else {
            //   this.mapArr[1].locY -= yCol + this.hallPad
            // }
          }
        }

        // console.log(this.mapArr[j])
      }
    }

    if (this.recurNum === this.limit) recur = false
    if (recur) this.spacer()
  }
}

