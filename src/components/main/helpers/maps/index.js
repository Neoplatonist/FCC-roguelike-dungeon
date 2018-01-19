import { rand } from '../utils'
import Item from '../items'
import Enemies from '../enemies'

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
    [ this.min , this.max ] = [ 12, 30 ]

    this.item = new Item()
    this.items = []
    this.enemy = new Enemies()
    this.enemies = []

    this.hallPad = 5
    this.limit = 500
    this.lvl = 1
    this.mapArr = []
    this.numOfRooms = 15
    this.placed = {
      boss: false,
      weapon: false
    }
    this.prevRoom = {
      loc: [],
      doorLoc: []
    }
    this.recurNum = 0
  }

  init() {
    for (let i = 0; i < this.numOfRooms; i++) {
      this.createRoom(i)
    }

    this.spacer()

    for (let i = 0; i < this.mapArr.length; i++) {
      let random = rand(0, 100)
      if (random < 20 || random > 80) {
        let enemy = this.enemy.createEnemies(this.lvl)

        enemy.locX = rand(this.mapArr[i].locX + 1, this.mapArr[i].locX + this.mapArr[i].dimX - 1)
        enemy.locY = rand(this.mapArr[i].locY + 1, this.mapArr[i].locY + this.mapArr[i].dimY - 1)

        this.enemies.push(enemy)

      } else if ((random > 20 && random < 35) || (random < 80 && random > 65)) {
        let health = this.item.createHealth()

        health.locX = rand(this.mapArr[i].locX + 1, this.mapArr[i].locX + this.mapArr[i].dimX - 1)
        health.locY = rand(this.mapArr[i].locY + 1, this.mapArr[i].locY + this.mapArr[i].dimY - 1)

        this.items.push(health)

      } else if (
        !this.placed.weapon && 
        ((random > 40 && random < 60) || i === this.numOfRooms-1)
      ) {
        let weapon = this.item.createWeapon(this.lvl)

        weapon.locX = rand(this.mapArr[i].locX + 1, this.mapArr[i].locX + this.mapArr[i].dimX - 1)
        weapon.locY = rand(this.mapArr[i].locY + 1, this.mapArr[i].locY + this.mapArr[i].dimY - 1)

        this.items.push(weapon)
        this.placed.weapon = true
      }
    }

    // // Room Intersect Tests
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
    //   locX: 17, 
    //   locY: 20
    // }

    // this.mapArr.push(aObj)
    // this.mapArr.push(bObj)
  }
  
  checkIntersect(a1,a2, b1,b2) {
    if (a1 < b2 && a2 > b1) {
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
      return 0
    }
  }

  createRoom(i) {
    let room = { ...roomObj }

    
    room.dimX = rand(this.min, this.max)
    room.dimY = rand(this.min, this.max)
    room.locX = rand(30, mapSize[0] -30)
    room.locY = rand(30, mapSize[1] -30)
    room.id = i

    if (room.id === 0) {
      room.type = 'start'
    }

    this.mapArr.push(room)
  }

  everything() {
    this.enemies //? 
    return {
      items: this.items,
      enemies: this.enemies,
      rooms: this.mapArr
    }
  }

  spacer() {
    let recur = false
    this.recurNum++

    for (let i = 0; i < this.mapArr.length; i++) {
      for (let j = 0; j < this.mapArr.length; j++) {
        // console.log(this.mapArr[i])
        // console.log(this.mapArr[j])

        // Check for intersects
        let xCol = this.checkIntersect(
          this.mapArr[i].locX,
          this.mapArr[i].locX + this.mapArr[i].dimX,
          this.mapArr[j].locX,
          this.mapArr[j].locX + this.mapArr[j].dimX
        )

        let yCol = this.checkIntersect(
          this.mapArr[i].locY,
          this.mapArr[i].locY + this.mapArr[i].dimY,
          this.mapArr[j].locY,
          this.mapArr[j].locY + this.mapArr[j].dimY
        )

        // if both xCol and yCol then they are intersecting
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
          }
        } else {
          // BUT we should make sure there is 
          // enough spacing around the sides for 
          // running our paths

          // 1. Determine which side the room it is on
          // 2. Check negative space between them
          // 3. If less than this.hallPad adjust the locX & locY coordinates

          const top = this.mapArr[i].locY - (this.mapArr[j].locY + this.mapArr[j].dimY)
          const right = this.mapArr[j].locX - (this.mapArr[i].locX + this.mapArr[i].dimX)
          const bottom = this.mapArr[j].locY - (this.mapArr[i].locY + this.mapArr[i].dimY)
          const left = this.mapArr[i].locX - (this.mapArr[j].locX + this.mapArr[j].dimX)

          if (top > 0 && top < this.hallPad) {
            const dist = this.hallPad - top
            this.mapArr[j].locX -= dist
          }

          if (right > 0 && right < this.hallPad) {
            const dist = this.hallPad - right
            this.mapArr[j].locX += dist
          }

          if (bottom > 0 && bottom < this.hallPad) {
            const dist = this.hallPad - bottom
            this.mapArr[j].locY += dist
          }

          if (left > 0 && left < this.hallPad) {
            const dist = this.hallPad - left
            this.mapArr[j].locX -= dist
          }
        }
      }
    }

    if (this.recurNum === this.limit) recur = false
    if (recur) this.spacer()
  }
}

