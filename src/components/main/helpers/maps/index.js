import { rand } from '../utils'
import Item from '../items'
import Enemies from '../enemies'

const mapSize = [192, 108]
// const mapSize = [20, 30]
let roomObj = {
  coll: 0,
  dimX: 0, 
  dimY: 0,
  doors: [],
  locX: 0, 
  locY: 0,
  id: 0
}

// TODO:
// Need to make door syntax/api
//  simliar to that of room.
// Door currently uses door.coords[] and door.doorsize[]
//  when room uses room.locX/locY or room.dimX/dimY

export default class Map {
  constructor(doorSize, mapLvl) {
    [ this.min , this.max ] = [ 12, 30 ]

    this.doors = []
    this.doorSize = [3,3]
    this.item = new Item()
    this.items = []
    this.enemy = new Enemies()
    this.enemies = []
    // this.hallPad = 80
    this.mapArr = []
    this.mapLvl = mapLvl
    this.placed = {
      boss: false,
      portal: false,
      weapon: false
    }
    this.prevRoom = {
      loc: [],
      doorLoc: []
    }
    this.recurNum = 0
  }

  init() {
    this.items = []
    this.enemies = []
    this.rooms = []

    this.createFirstRoom()
    this.createRooms()
    this.randomSquares()
  }

  startWeapon() {
    return this.item.startWeapon()
  }

  genCollision = {
    'none': (v, room) => 0,
    'top': (v, room) => {
      console.log('Collision top')
      return Math.abs((v.locY + v.dimY) - room.locY + this.doorSize[1])
    },
    'right': (v, room) => {
      console.log('Collision right')
      return Math.abs((room.locX + room.dimX) - v.locX + this.doorSize[0])
    },
    'bottom': (v, room) => {
      console.log('Collision bottom')
      return Math.abs((room.locY + room.dimY) - v.locY + this.doorSize[1])
    },
    'left': (v, room) => {
      console.log('Collision left')
      return Math.abs((v.locX + v.dimX) - room.locX + this.doorSize[0])
    }
  }

  genDoor = {
    'top': (room) => {
      return {
        coords: [
          rand(
            room.locX + this.doorSize[0], 
            room.locX + room.dimX - this.doorSize[0]
          ),
          room.locY - this.doorSize[1]
        ],
        dir: 'top',
        doorSize: [this.doorSize[0], this.doorSize[1]]
      }
    },

    'right': (room) => {
      return {
        coords: [
          room.locX + room.dimX,
          rand(
            room.locY + this.doorSize[1], 
            room.locY + room.dimY - this.doorSize[1]
          )
        ],
        dir: 'right',
        doorSize: [this.doorSize[0], this.doorSize[1]]
      }
    },

    'bottom': (room) => {
      console.log('genDoor bottom coords:')
      console.log(room.locX + this.doorSize[0])
      console.log(room.locX + room.dimX - this.doorSize[1])
      return {
        coords: [
          rand(
            room.locX + this.doorSize[0], 
            room.locX + room.dimX - this.doorSize[1]
          ),
          room.locY + room.dimY
        ],
        dir: 'bottom',
        doorSize: [this.doorSize[0], this.doorSize[1]]
      }
    },

    'left': (room) => {
      return {
        coords: [
          room.locX - this.doorSize[0],
          rand(
            room.locY + this.doorSize[1], 
            room.locY + room.dimY - this.doorSize[1]
          )
        ],
        dir: 'left',
        doorSize: [this.doorSize[0], this.doorSize[1]]
      }
    }
  }

  genRoom = {
    'top': (roomIndex, doorIndex, prevDoor, room) => {
      console.log('Room Top:', room.id)
      room.locX = rand(
        prevDoor.coords[0] - room.dimX + prevDoor.doorSize[0],
        prevDoor.coords[0]
      )
      room.locY = prevDoor.coords[1] - room.dimY

      let { rom, collision, dist } = this.checkIntersect(room)

      console.log('id:',rom.id)

      if (collision === 'delete' && dist === 0) {
        console.log('deleted room')
        // probably need to push this into a new function 
        // and call lower in the chain to prevent premature
        // deletion of the doors in prev object.
        // prevDoor = undefined
        rom = undefined
        this.mapArr[roomIndex].doors[doorIndex] = undefined
      } else if (dist > 0 && (rom != null || rom != undefined)) {
        console.log('key', doorIndex)
        rom = this.moveRoom(roomIndex, doorIndex, rom, prevDoor.dir, collision, dist)
        console.log('moveRoom genRoom obj', rom)

        if (rom != undefined && (rom.dimX < this.min || rom.dimY < this.min)) {
          rom = undefined
          this.mapArr[roomIndex].doors[doorIndex] = undefined
        }
      }

      // if (rom != undefined || rom != null) {
      //   rom.doors = this.createDoors(rom, this.genDoorInv[prevDoor.dir]())
      //   console.log(room)
      //   this.mapArr.push(rom)
      //   this.createRooms()
      // }

      // room.doors = this.createDoors(room, 'bottom')

      // this.mapArr.push(room)
      // this.createRooms()

      return rom
    },

    'right': (roomIndex, doorIndex, prevDoor, room) => {
      console.log('Room Right', room.id)
      room.locX = prevDoor.coords[0] + prevDoor.doorSize[0]
      room.locY = rand(
        prevDoor.coords[1] - room.dimY + prevDoor.doorSize[1],
        prevDoor.coords[1]
      )

      let { rom, collision, dist } = this.checkIntersect(room)

      console.log('id:',rom.id)
      
      if (collision === 'delete' && dist === 0) {
        console.log('deleted room')
        // probably need to push this into a new function 
        // and call lower in the chain to prevent premature
        // deletion of the doors in prev object.

        // prevDoor = undefined 
        this.mapArr[roomIndex].doors[doorIndex] = undefined
        rom = undefined
      } else if (dist > 0 && (rom != null || rom != undefined)) {
        console.log('door key', doorIndex)
        console.log('genRoom right obj before move', rom)
        rom = this.moveRoom(roomIndex, doorIndex, rom, prevDoor.dir, collision, dist)

        if (rom != undefined && (rom.dimX < this.min || rom.dimY < this.min)) {
          rom = undefined
          this.mapArr[roomIndex].doors[doorIndex] = undefined
        }
      }

      // if (rom != undefined || rom != null) {
      //   rom.doors = this.createDoors(rom, this.genDoorInv[prevDoor.dir]())
      //   console.log(room)
      //   this.mapArr.push(rom)
      //   // this.createRooms()
      // }

      // room.doors = this.createDoors(room, 'left')

      // this.mapArr.push(room)
      // this.createRooms()

      return rom
    },

    'bottom': (roomIndex, doorIndex, prevDoor, room) => {
      console.log('Room Bottom', room.id)

      room.locX = rand(
        prevDoor.coords[0] - room.dimX + prevDoor.doorSize[0],
        prevDoor.coords[0]
      )
      room.locY = prevDoor.coords[1] + prevDoor.doorSize[1]

      let { rom, collision, dist } = this.checkIntersect(room)

      console.log('id:',rom.id)
      
      if (collision === 'delete' && dist === 0) {
        console.log('deleted room')
        // probably need to push this into a new function 
        // and call lower in the chain to prevent premature
        // deletion of the doors in prev object.

        // prevDoor = undefined 
        this.mapArr[roomIndex].doors[doorIndex] = undefined
        rom = undefined
      } else if (dist > 0 && (rom != null || rom != undefined)) {
        console.log('door key', doorIndex)
        console.log('genRoom right obj before move', rom)
        rom = this.moveRoom(roomIndex, doorIndex, rom, prevDoor.dir, collision, dist)

        if (rom != undefined && (rom.dimX < this.min || rom.dimY < this.min)) {
          rom = undefined
          this.mapArr[roomIndex].doors[doorIndex] = undefined
        }
      }

      // if (rom != undefined || rom != null) {
      //   rom.doors = this.createDoors(rom, this.genDoorInv[prevDoor.dir]())
      //   console.log(room)
      //   this.mapArr.push(rom)
      //   // this.createRooms()
      // }

      // room.doors = this.createDoors(room, 'left')

      // this.mapArr.push(room)
      // this.createRooms()

      return rom
    },

    'left': (roomIndex, doorIndex, prevDoor, room) => {
      console.log('Room Left', room.id)

      room.locX = prevDoor.coords[0] - room.dimX
      room.locY = rand(
        prevDoor.coords[1] - room.dimY + this.doorSize[1],
        prevDoor.coords[1]
      )

      let { rom, collision, dist } = this.checkIntersect(room)

      console.log('id:',rom.id)
      
      if (collision === 'delete' && dist === 0) {
        console.log('deleted room')
        // probably need to push this into a new function 
        // and call lower in the chain to prevent premature
        // deletion of the doors in prev object.

        // prevDoor = undefined 
        this.mapArr[roomIndex].doors[doorIndex] = undefined
        rom = undefined
      } else if (dist > 0 && (rom != null || rom != undefined)) {
        console.log('door key', doorIndex)
        console.log('genRoom right obj before move', rom)
        rom = this.moveRoom(roomIndex, doorIndex, rom, prevDoor.dir, collision, dist)

        if (rom != undefined && (rom.dimX < this.min || rom.dimY < this.min)) {
          rom = undefined
          this.mapArr[roomIndex].doors[doorIndex] = undefined
        }
      }
     

      // if (rom != undefined || rom != null) {
      //   rom.doors = this.createDoors(rom, this.genDoorInv[prevDoor.dir]())
      //   console.log(room)
      //   this.mapArr.push(rom)
      //   // this.createRooms()
      // }

      // room.doors = this.createDoors(room, 'left')

      // this.mapArr.push(room)
      // this.createRooms()

      return rom
    }
  }

  genCollTop = {
    'top': (dist, door, room, prevRoom) => {
      console.log('top door top')
      room.locY += dist
      room.dimY -= dist

      if (room.dimY < door.doorSize[1]) {
        door = undefined
        room = undefined
      }

      return {door, room}
    },
    'right': (dist, door, room, prevRoom) => {
      console.log('top door right')
      room.locY += dist
      room.dimY -= dist

      // // checks within dimensions of prevRoom
      // if (
      //   door.coords[1] < prevRoom.locY ||
      //   door.coords[1] + door.doorSize[1] > prevRoom.locY + prevRoom.dimY ||
      //   room.dimY < door.doorSize[1]
      // ) {
      //   door = undefined
      //   room = undefined
      // } 
      
      // if (door != undefined) {
      //   if (
      //     door.coords[1] < room.locY ||
      //     door.coords[1] + door.doorSize[1] > room.locY + room.dimY
      //   ) {
      //     door.coords[1] = room.locY
      //   }
      // }

      if (room.locY + door.doorSize[1] > prevRoom.locY + prevRoom.dimY) {
        door = undefined
        room = undefined
      }

      if (room != undefined) {
        if (room.locY > door.coords[1]) {
          door.coords[1] = room.locY
        }
      }

      return {door, room}
    },
    'bottom': (dist, door, room, prevRoom) => {
      console.log('top door bottom')
      room.locY += dist
      room.dimY -= dist
      door.doorSize[1] += dist
    
      return {door, room}
    },
    'left': (dist, door, room, prevRoom) => {
      console.log('top door left')
      room.locY += dist
      room.dimY -= dist

      if (room.locY > prevRoom.locY + prevRoom.dimY - door.doorSize[1]) {
        door = undefined
        room = undefined
      }

      if (room != undefined) {
        if (room.locY > door.coords[1]) {
          door.coords[1] = room.locY
        }
      }

      return {door, room}
    }
  }

  genCollRight = {
    'top': (dist, door, room, prevRoom) => {
      console.log('right door top')
      room.dimX -= dist

      if (room.locX + room.dimX < prevRoom.locX + door.doorSize[0]) {
        door = undefined
        room = undefined
      }

      if (room != undefined) {
        if (room.locX + room.dimX < door.coords[0] + door.doorSize[0]) {
          door.coords[0] = room.locX + room.dimX - door.doorSize[0]
        }
      }

      return {door, room}
    },
    'right': (dist, door, room, prevRoom) => {
      console.log('right door right')
      room.dimX -= dist
      
      return {door, room}
    },
    'bottom': (dist, door, room, prevRoom) => {
      console.log('right door bottom')
      room.locX += dist
      room.dimX -= dist

      if (room.locX + room.dimX < prevRoom.locX + door.doorSize[0]) {
        door = undefined
        room = undefined
      }

      if (room != undefined) {
        if (room.locX + room.dimX < door.coords[0] + door.doorSize[0]) {
          door.coords[0] = room.locX + room.dimX + door.doorSize[0]
        }

        if (room.locX > door.coords[0]) {
          door.coords[0] = room.locX
        }
      }

      return {door, room}
    },
    'left': (dist, door, room, prevRoom) => {
      console.log('right door left')
      room.locX += dist
      room.dimX -= dist

      return {door, room}
    }
  }

  genCollBottom = {
    'top': (dist, door, room, prevRoom) => {
      console.log('bottom door top')
      room.dimY -= dist
      door.coords[1] -= dist
      door.doorSize[1] += dist

      // checks within dimensions of prevRoom
      if (room.dimY < door.doorSize[1]) {
        door = undefined
        room = undefined
      }

      return {door, room}
    },
    'right': (dist, door, room, prevRoom) => {
      console.log('bottom door right')
      room.locY += dist
      room.dimY -= dist

      if (room.locY + room.dimY - door.doorSize[1] < prevRoom.locY) {
        door = undefined
        room = undefined
      }

      if (room != undefined) {
        if (room.locY + room.dimY < door.coords[1] + door.doorSize[1]) {
          door.coords[1] = room.locY + room.dimY - door.doorSize[1]
        }
      }

      return {door, room}
    },
    'bottom': (dist, door, room, prevRoom) => {
      console.log('bottom door bottom')
      room.dimY -= dist

      return {door, room}
    },
    'left': (dist, door, room, prevRoom) => {
      console.log('bottom door left')
      room.locY += dist
      room.dimY -= dist

      if (room.locY + room.dimY < prevRoom.locY) {
        door = undefined
        room = undefined
      }

      if (room != undefined) {
        if (room.locY + room.dimY < door.coords[1]) {
          door.coords[1] = room.locY + room.dimY - door.doorSize[1]
        }
      }

      return {door, room}
    }
  }

  genCollLeft = {
    'top': (dist, door, room, prevRoom) => {
      console.log('left door top')
      room.locX = room.locX + dist
      room.dimX = room.dimX - dist

      if (room.locX > prevRoom.locX + prevRoom.dimX) {
        door = undefined
        room = undefined
      }

      if (door != undefined) {
        if (room.locX > door.coords[0]) {
          door.coords[0] = room.locX
        }
      }

      return {door, room}
    },
    'right': (dist, door, room, prevRoom) => {
      console.log('left door right')
      room.locX = room.locX + dist
      door.doorSize[0] = door.doorSize[0] + dist
      return {door, room}
    },
    'bottom': (dist, door, room, prevRoom) => {
      console.log('left door bottom')
      room.locX += dist
      room.dimX -= dist

      if (room.locX > prevRoom.locX + prevRoom.dimX) {
        door = undefined
        room = undefined
      }

      if (room != undefined) {
        if (room.locX > door.coords[0] + door.doorSize[0]) {
          door.coords[0] = room.locX
        }
      }

      return {door, room}
    },
    'left': (dist, door, room, prevRoom) => {
      console.log('left door left')
      room.locX += dist
      room.dimX -= dist

      return {door, room}
    }
  }

  genCollDir = {
    'top': (dir, dist, door, room, prevRoom) => this.genCollTop[dir](dist, door, room, prevRoom),
    'right': (dir, dist, door, room, prevRoom) => this.genCollRight[dir](dist, door, room, prevRoom),
    'bottom': (dir, dist, door, room, prevRoom) => this.genCollBottom[dir](dist, door, room, prevRoom),
    'left': (dir, dist, door, room, prevRoom) => this.genCollLeft[dir](dist, door, room, prevRoom)
  }

  checkIntersect(room) {
    console.log('checking intersect')
    let collision = 'none'
    let dist = 0

    this.mapArr.forEach((v,k) => {
      if (v.id !== room.id) {
        const dx = (room.locX + room.dimX / 2) - (v.locX + v.dimX / 2)
        const dy = (room.locY + room.dimY / 2) - (v.locY + v.dimY / 2)
        const width = (room.dimX + v.dimX) / 2
        const height = (room.dimY + v.dimY) / 2
        const crossWidth = width * dy
        const crossHeight = height * dx

        if (Math.abs(dx) <= width && Math.abs(dy) <= height) {
          console.log('Collision Detected!!!')
          room.coll++
          if (crossWidth < crossHeight) {
            collision = crossWidth > -crossHeight ? 'left' : 'bottom'
          } else {
            collision = crossWidth > -crossHeight ? 'top' : 'right'
          }

          console.log('calc dist')
          dist = this.genCollision[collision](v, room)

          // Delete after debugging
          if (dist > 0) {
            console.log('Dist:', dist)
          }
        }
      }
    })

    if (room.coll > 1) {
      console.log('Collision Counter1: ', room.coll)
      return {rom: room, collision: 'delete', dist: 0}
    } else {
      console.log('Collision Counter2: ', room.coll)
      return {rom: room, collision, dist}
    }
  }

  createDoors(room, dir) {
    console.log('createDoors')
    let doors = []

    // Check: enough space for new room
    // Top
    if (
      room.locY - (this.doorSize[1] + this.max) > 0 && 
      dir !== 'top'
    ) {
      const r = rand(0, 100)
      
      if (r < 40 || r > 60 || room.type === 'start') {
        doors.push(this.genDoor['top'](room))
      }
    }

    // Right
    if (
      room.locX + room.dimX + (this.doorSize[0] + this.max) < mapSize[0] && 
      dir !== 'right'
    ) {
      const r = rand(0, 100)

      if (r < 40 || r > 60 || room.type === 'start') {
        doors.push(this.genDoor['right'](room))
      }
    }

    // Bottom
    if (
      room.locY + room.dimY + (this.doorSize[1] + this.max) < mapSize[1] && 
      dir !== 'bottom'
    ) {
      const r = rand(0, 100)

      if (r < 40 || r > 60 || room.type === 'start') {
        doors.push(this.genDoor['bottom'](room))
      }
    }

    // Left
    if (
      room.locX - (this.doorSize[0] + this.max) > 0 && 
      dir !== 'left'
    ) {
      const r = rand(0, 100)

      if (r < 40 || r > 60 || room.type === 'start') {
        doors.push(this.genDoor['left'](room))
      }
    }

    return doors
  }

  createFirstRoom() {
    let room = Object.assign({}, roomObj)

    room.dimX = rand(this.min, this.max)
    room.dimY = rand(this.min, this.max)
    room.locX = rand(this.max, mapSize[0]-this.max)
    room.locY = rand(this.max, mapSize[1]-this.max)
    room.id = 0

    room.doors = this.createDoors(room)
    if (room.doors.length === 0) {
      room.doors = this.createDoors(room)
    }

    this.mapArr.push(room)
  }

  genDoorInv = {
    'top': () => 'bottom',
    'right': () => 'left',
    'bottom': () => 'top',
    'left': () => 'right'
  }

  createRoom(roomIndex, doorIndex, prevDoor) {
    console.log('createRoom', prevDoor.dir)
    console.log(prevDoor)
    console.log(this.mapArr[roomIndex].doors[doorIndex])

    let room = Object.assign({}, roomObj)
    // let room = JSON.parse(JSON.stringify(roomObj))

    room.dimX = rand(this.min, this.max)
    room.dimY = rand(this.min, this.max)
    room.id = this.mapArr.length

    console.log('key', doorIndex)
    room = this.genRoom[prevDoor.dir](roomIndex, doorIndex, prevDoor, room)

    console.log('createRoom obj before doors', room)

    if (room != undefined || room != null) {
      room.doors = this.createDoors(room, this.genDoorInv[prevDoor.dir]())
      console.log('createRoom obj before mapArr', room)
      this.mapArr.push(room)
      this.createRooms()
    }
  }

  createRooms() {
    console.log('createRooms')
    let roomIndex = this.mapArr.length - 1
    let prevRoom = this.mapArr[roomIndex]
    if (prevRoom.doors.length > 0) {
      prevRoom.doors.forEach((v, k) => this.createRoom(roomIndex, k, v))
    }
  }

  moveRoom(roomIndex, doorIndex, rom, dorDir, dir, dist) {
    console.log('Started the move')

    let prevRoom = this.mapArr[roomIndex]
    let prevDoor = this.mapArr[roomIndex].doors[doorIndex]
    console.log('door', prevDoor)
    // let door = prevRoom.doors[doorIndex]
    // console.log('door:', door)

    if (prevDoor === undefined || prevDoor === null) {
      return rom = undefined
    }

    console.log('door index', doorIndex)

    let { door, room } = this.genCollDir[dir](dorDir, dist, prevDoor, rom, prevRoom)
    console.log('moveRoom obj', room)

    this.mapArr[roomIndex].doors[doorIndex] = door

    return room
  }

  randomSquares() {
    let weapon = rand(1, this.mapArr.length - 1)
    let portal = rand(1, this.mapArr.length - 1)
    let boss = rand(1, this.mapArr.length - 1)

    this.mapArr.forEach((v, k) => {
      let random = rand(0, 100)

      if (random < 20 || random > 80) {
        let enemy = this.enemy.createEnemies(this.mapLvl)

        enemy.locX = rand(
          v.locX + 2, 
          v.locX + v.dimX - 4
        )
        enemy.locY = rand(
          v.locY + 2, 
          v.locY + v.dimY - 4
        )

        this.enemies.push(enemy)

      } else if (
        (random > 20 && random < 40) || (random < 80 && random > 65)
      ) {
        let health = this.item.createHealth()

        health.locX = rand(
          v.locX + 2, 
          v.locX + v.dimX - 4
        )
        health.locY = rand(
          v.locY + 2, 
          v.locY + v.dimY - 4
        )

        this.items.push(health)

      } 
      
      if (this.placed.weapon === false && k === weapon) {
        let weapon = this.item.createWeapon(this.mapLvl)

        weapon.locX = rand(
          v.locX + 2, 
          v.locX + v.dimX - 4
        )
        weapon.locY = rand(
          v.locY + 2, 
          v.locY + v.dimY - 4
        )

        this.items.push(weapon)
        this.placed.weapon = true
      }

      if (this.placed.portal === false && k === portal && this.mapLvl != 5) {
        // console.log('making portal')
        let portal = {
          color: 'purple',
          locX: 0,
          locY: 0
        }

        portal.locX = rand(
          v.locX + 2,
          v.locX + v.dimX - 4
        )

        portal.locY = rand(
          v.locY + 2,
          v.locY + v.dimY - 4
        )

        this.items.push(portal)
        this.placed.portal = true
      }
      
      if (this.placed.boss === false && this.mapLvl === 5 && k === boss) {
        let enemy = this.enemy.createBoss()

        enemy.locX = rand(
          v.locX + enemy.dims,
          v.locX + v.dimX - enemy.dims
        )

        enemy.locY = rand(
          v.locY + enemy.dims,
          v.locY - v.dimY - enemy.dims
        )

        this.enemies.push(enemy)
        this.placed.boss = true
      }
    })
  }

  everything() {
    return {
      items: this.items,
      enemies: this.enemies,
      rooms: this.mapArr
    }
  }

  updater(item, obj) {
    switch (item) {
      case 'item':
        this.items = obj
        break

      case 'enemies':
        this.enemies = obj
        break

      default:
        break
    }
  }
}

// switch (dir) {
    //   case 'top':
    //     switch (dorDir) {
    //       // case 'top':            
    //       //   console.log('door top')
    //       //   break
    
    //       case 'right':
    //         // dist = (room.locX + room.dimX) - r2.x + this.doorSize
    //         door.locY = door.locY - dist
    //         room.dimY = room.dimY - dist
    //         room.locY = room.locY + dist
    //         console.log('door right')
    //         break
    
    //       case 'bottom':
    //         // dist = r2.y - r1.y + this.doorSize
    //         console.log('door bottom')
    //         break
    
    //       case 'left':
    //         // dist = room.locX - r2.x + this.doorSize
    //         console.log('door left')
    //         break
        
    //       default:
    //         break
    //     }

    //     console.log('collision top', dist)
    //     break

    //   case 'right':
    //     switch (dorDir) {
    //       // case 'top':            
    //       //   console.log('door top')
    //       //   break
    
    //       case 'right':
    //         room.dimY = room.dimY - dist
    //         room.locY = room.locY + dist
    //         console.log('door right')
    //         break
    
    //       case 'bottom':
    //         console.log('door bottom')
    //         break
    
    //       case 'left':
    //         console.log('door left')
    //         break
        
    //       default:
    //         break
    //     }

    //     console.log('collision right', dist)
    //     break

    //   case 'bottom':
    //     switch (dorDir) {
    //       // case 'top':            
    //       //   console.log('door top')
    //       //   break
    
    //       case 'right':
    //         // room.dimY = room.dimY - dist
            
    //         console.log('door right')
    //         break
    
    //       case 'bottom':
    //         console.log('door bottom')
    //         break
    
    //       case 'left':
    //         console.log('door left')
    //         break
        
    //       default:
    //         break
    //     }

    //     console.log('collision bottom')
    //     break

    //   case 'left':
    //     switch (dorDir) {
    //       // case 'top':            
    //       //   console.log('door top')
    //       //   break
    
    //       case 'right':
    //         door.dimX = door.dimX + dist
    //         room.locX = room.locX + dist
    //         console.log('door right')
    //         break
    
    //       case 'bottom':
    //         console.log('door bottom')
    //         break
    
    //       case 'left':
    //         console.log('door left')
    //         break
        
    //       default:
    //         break
    //     }

    //     console.log('collision left')
    //     break
    
    //   default:
    //     break
    // }

    // return room