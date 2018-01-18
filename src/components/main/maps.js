import { rand } from './utils'

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
    [ this.min , this.max ] = [ 4, 30 ]

    this.hallPad = 4
    this.mapArr = []
    this.prevRoom = {
      loc: [],
      doorLoc: []
    }
  }

  init() {
    for (let i = 0; i < 20; i++) {
      this.createRoom(i)
    }

    for (let i = 0; i < this.mapArr.length; i++) {
      for (let j = i + 1; j < this.mapArr.length; j++) {
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

        // console.log(this.mapArr[i])
        // console.log(this.mapArr[j])

        // Check for intersection
        let xCol = this.checkIntersect(a.x1, a.x2, b.x1, b.x2)
        let yCol = this.checkIntersect(a.y1, a.y2, b.y1, b.y2)

        if (xCol !== 0 && yCol !== 0) {
          if (Math.abs(xCol) < Math.abs(yCol)) {
            // xCol needs to shift
            if (xCol < 0) {
              // shift left
              this.mapArr[j].locX -= xCol * -1 - this.hallPad
            } else {
              // shift right
              this.mapArr[j].locX += xCol + this.hallPad
            }
          } else {
            // yCol needs to shift
            if (yCol < 0) {
              // shift down
              this.mapArr[j].locY += yCol * -1 + this.hallPad
            } else {
              // shift up
              this.mapArr[j].locY -= yCol - this.hallPad
            }
          }
        }

        // console.log(this.mapArr[j])
      }
    }

    return this.mapArr
  }
  
  checkIntersect(a1,a2, b1,b2) {
    // get the min and max a && b
    let min1 = Math.min(a1,a2)
    let max1 = Math.max(a1,a2)
    let min2 = Math.min(b1,b2)
    let max2 = Math.max(b1,b2)

    if (min1 <= max2 && max1 >= min2) {
      // calc how much the ranges intersect
      let dist1 = max2 - min1
      let dist2 = max1 - min2

      if (dist1 < dist2) {
        // shift up
        return dist1
      } else {
        // shift down
        return dist2 *-1
      }
    } else {
      // no problems
      return 0
    }
  }

  createRoom(i) {
    let room = { ...roomObj }

    room = {
      dimX: rand(this.min, this.max),
      dimY: rand(this.min, this.max),
      locX: rand(0, mapSize[0]-3),
      locY: rand(0, mapSize[1]-3),
      id: i
    }

    if (room.id === 0) {
      room.type = 'start'
    }

    this.mapArr.push(room)
  }
}

