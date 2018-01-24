import { rand } from '../utils'
import Item from '../items'
import Enemies from '../enemies'

const mapSize = [1920, 1080] // 1920 x 1080 
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
    [ this.min , this.max ] = [ 120, 300 ]

    this.doors = []
    this.doorSize = 20
    this.item = new Item()
    this.items = []
    this.enemy = new Enemies()
    this.enemies = []
    this.hallway = []
    this.hallPad = 80
    this.limit = 500
    this.lvl = 1
    this.mapArr = []
    this.numOfRooms = 10
    this.placed = {
      boss: false,
      stairs: false,
      weapon: false
    }
    this.prevRoom = {
      loc: [],
      doorLoc: []
    }
    this.recurNum = 0
  }

  init() {
    this.createFirstRoom()
    this.createRooms()
  }

  createFirstRoom() {
    let room = JSON.parse(JSON.stringify(roomObj))
    room.dimX = rand(this.min, this.max)
    room.dimY = rand(this.min, this.max)
    room.locX = rand(this.max, mapSize[0]-this.max)
    room.locY = rand(this.max, mapSize[1]-this.max)
    room.type = 'start'

    // Check: enough space for new room
    // Top
    if (room.locY - (this.hallPad + this.max) > 0) {
      room.doors.push({
        coords: [
          rand(room.locX + this.doorSize, room.locX + room.dimX - this.doorSize),
          room.locY - this.doorSize
        ],
        dir: 'top',
        placed: false
      })
    }

    // Right
    if (room.locX + room.dimX + (this.hallPad + this.max) < mapSize[0]) {
      room.doors.push({
        coords: [
          room.locX + room.dimX,
          rand(room.locY + this.doorSize, room.locY + room.dimY - this.doorSize)
        ],
        dir: 'right',
        placed: false
      })
    }

    // Bottom
    if (room.locY + room.dimY + (this.hallPad + this.max) < mapSize[1]) {
      room.doors.push({
        coords: [
          rand(room.locX + this.doorSize, room.locX + room.dimX - this.doorSize),
          room.locY + room.dimY
        ],
        dir: 'bottom',
        placed: false
      })
    }

    // Left
    if (room.locX - (this.hallPad + this.max) > 0) {
      console.log('left')
      room.doors.push({
        coords: [
          room.locX - this.doorSize,
          rand(room.locY + this.doorSize, room.locY + room.dimY - this.doorSize)
        ],
        dir: 'left',
        placed: false
      })
    }

    this.mapArr.push(room)
  }

  createRoom(prevDoor) {
    let curRoom = JSON.parse(JSON.stringify(roomObj))

    curRoom.dimX = 0
    curRoom.dimY = 0
    curRoom.locX = 0
    curRoom.locY = 0
  }

  createRooms() {
    let prevRoom = this.mapArr[this.mapArr.length - 1]

    for (let i = 0; i < prevRoom.doors.length; i++) {
      this.createRoom(prevRoom.doors[i])
    }
  }

  















































  randomSquares() {
    for (let i = 0; i < this.mapArr.length; i++) {
      let random = rand(0, 100)
      if (random < 20 || random > 80) {
        let enemy = this.enemy.createEnemies(this.lvl)

        enemy.locX = rand(
          this.mapArr[i].locX + 20, 
          this.mapArr[i].locX + this.mapArr[i].dimX - 20
        )
        enemy.locY = rand(
          this.mapArr[i].locY + 20, 
          this.mapArr[i].locY + this.mapArr[i].dimY - 20
        )

        this.enemies.push(enemy)

      } else if ((random > 20 && random < 35) || (random < 80 && random > 65)) {
        let health = this.item.createHealth()

        health.locX = rand(
          this.mapArr[i].locX + 20, 
          this.mapArr[i].locX + this.mapArr[i].dimX - 20
        )
        health.locY = rand(
          this.mapArr[i].locY + 20, 
          this.mapArr[i].locY + this.mapArr[i].dimY - 20
        )

        this.items.push(health)

      } else if (
        !this.placed.weapon && 
        ((random > 40 && random < 60) || i === this.numOfRooms-1)
      ) {
        let weapon = this.item.createWeapon(this.lvl)

        weapon.locX = rand(
          this.mapArr[i].locX + 20, 
          this.mapArr[i].locX + this.mapArr[i].dimX - 20
        )
        weapon.locY = rand(
          this.mapArr[i].locY + 20, 
          this.mapArr[i].locY + this.mapArr[i].dimY - 20
        )

        this.items.push(weapon)
        this.placed.weapon = true
      }
    }
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

  createDoors() {

  }

  createHalls() {

  }

  everything() {
    // this.enemies //? 
    return {
      items: this.items,
      enemies: this.enemies,
      hallways: this.hallway,
      rooms: this.mapArr
    }
  }
}

