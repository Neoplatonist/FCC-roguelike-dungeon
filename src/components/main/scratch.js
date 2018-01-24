  // playerMoveStart = (e) => {
  //   if (!this.locked) {
  //     // Moving Up ( W key )
  //     if (e.keyCode === 87) {
  //       let data = this.context.getImageData(
  //         this.youEntity.x,
  //         this.youEntity.y - this.youEntity.r -1,
  //         1,1
  //       ).data

  //       if (checkBound(data)) {
  //         this.mapLoc[1] += 5
  //       }
  //     }

  //     // Moving Down ( S key )
  //     if (e.keyCode === 83) {
  //       let data = this.context.getImageData(
  //         this.youEntity.x,
  //         this.youEntity.y + this.youEntity.r +1,
  //         1,1
  //       ).data

  //       if (checkBound(data)) {
  //         this.mapLoc[1] -= 5
  //       }
  //     }

  //     // Moving Left ( A key )
  //     if (e.keyCode === 65) {
  //       let data = this.context.getImageData(
  //         this.youEntity.x - this.youEntity.r -1,
  //         this.youEntity.y,
  //         1,1
  //       ).data

  //       if (checkBound(data)) {
  //         this.mapLoc[0] += 5
  //       }
  //     }

  //     // Moving Right ( D key )
  //     if (e.keyCode === 68) {
  //       let data = this.context.getImageData(
  //         this.youEntity.x + this.youEntity.r +1,
  //         this.youEntity.y,
  //         1,1
  //       ).data

  //       if (checkBound(data)) {
  //         this.mapLoc[0] -= 5
  //       }
  //     }
  //   }
  // }

  // handleInterval = () => {
    // this.locked = false
    // this.interval = setInterval(() => {
    //   this.drawAll()
    // }, 1000/this.fps)
    
  // }

  // handleIntervalClear = () => {
  //   this.locked = true
  //   clearInterval(this.interval)
  // }

  // console.log(x)
  // console.log(y)

  // if (
  //   rectA.x1 < rectB.x2 && // 153 > 96
  //   rectA.x2 > rectB.x1 &&
  //   rectA.y1 > rectB.y2 && 
  //   rectA.y2 < rectB.y1 //?
  // ) {
  //   console.log('Overlapping')
  // }

  // let overlap = false
  // if (rectA.x1 < rectB.x1 || rectA.x2 < rectB.x2) {
  //   true
  // }
  // if (rectA.x1 < rectB.x1 || rectA.x2 < rectB.x2) {
  //   true
  // }

  // let topLeft = [mapArr[0].locX, mapArr[0].locY]
    // let bottomRight = [
    //   mapArr[0].locX + mapArr[0].dimX, 
    //   mapArr[0].locY + mapArr[0].dimY
    // ]

    // // Distances 
    // let dist = {
    //   // top: topLeft[1] - 0,
    //   right: mapSize[0] - bottomRight[0],
    //   // bottom: mapSize[1] - bottomRight[1],
    //   left: topLeft[0] - 0
    // }

    // let doorX
    // let [ doorYmin, doorYmax ] = [ topLeft[1], bottomRight[1]]
    // if (dist.left > dist.right) {
    //   // left
    //   doorX = topLeft[0]

    //   console.log(doorX,doorYmin)
    //   console.log(doorX,doorYmax)

    //   let doorY = rand(doorYmin, doorYmax)
    //   console.log(doorX, doorY)
    //   mapArr[0].doors = [doorX, doorY]


    //   this.createRoom(1)
    // } else {
    //   // right
    //   doorX = topLeft[0] + bottomRight[0]
    // }

    // this.createRoom(1)

    // this.gen = this.generator()

    // console.log(this.gen.next().value)
    // console.log(this.gen.next().value)
    // console.log(this.gen.next().value)
    // console.log(this.gen.next().value)

    // * generator() {
  //   let [ min, max ] = [ 2, 30 ]
  //   let i = 0

  //   while(true) {
  //     i++
  //     yield {
  //       dimX: rand(min, max),
  //       dimY: rand(min, max),
  //       locX: rand(this.locXmin, this.locXmax),
  //       locY: rand(this.locYmin, this.locYmax),
  //       id: i
  //     }
  //   }
  // }

  // const initRoom = () => {
//   let [ min, max ] = [ 7, 25 ]
//   let [ dimX, dimY ] = [ rand(min, max), rand(min, max) ]
//   let room = { ...roomObj }

//   room = {
//     dimX: dimX, 
//     dimY: dimY,
//     locX: rand(0, mapSize[0]-dimX), 
//     locY: rand(0, mapSize[1]-dimY),
//     id: 0,
//     type: 'start'
//   }

//   return room
// }

// const rand = Math.ceil(Math.random() * 10)

// if (rand < 10 && rand > 90) { // 20% room
//   room(rand)
// } else if (rand > 10 && rand < 40) { // 30% hallway
//   hallway()
// } else ( // 50% empty
//   // haha tis blank space
//   console.log('haha tis blank space')
// )

// function room(rand) {
//   // THINGS WE WANT!!!
//   // At least a certain # of rooms
//   // At least a certain size

//   if (rand < 50) {
    
//   }
// }

// function hallway(rand) {
//   // THINGS WE WANT!!!
//   // At least a certain # of hallways
//   // no more than a certain length
//   if (rand < 50) {
    
//   }
// }


// // keep rooms from going off the canvas edge
//     // Top
//     if (room.locX < 0) {
      
//     }

//     // Right
//     if (room.locY > mapSize[1]) {
      
//     }

//     // Bottom
//     if (room.locX > mapSize[0]) {
      
//     }

//     // Left
//     if (room.locY < 0) {
      
//     }










































// import { rand } from '../utils'
// import Item from '../items'
// import Enemies from '../enemies'

// const mapSize = [1920, 1080] // 1920 x 1080 
// // const mapSize = [20, 30]
// let roomObj = {
//   dimX: 0, 
//   dimY: 0,
//   doors: [],
//   locX: 0, 
//   locY: 0,
//   id: 0,
//   type: ''
// }

// export default class Map {
//   constructor() {
//     [ this.min , this.max ] = [ 120, 300 ]

//     this.doors = []
//     this.item = new Item()
//     this.items = []
//     this.enemy = new Enemies()
//     this.enemies = []
//     this.hallway = []
//     this.hallPad = 80
//     this.limit = 500
//     this.lvl = 1
//     this.mapArr = []
//     this.numOfRooms = 10
//     this.placed = {
//       boss: false,
//       stairs: false,
//       weapon: false
//     }
//     this.prevRoom = {
//       loc: [],
//       doorLoc: []
//     }
//     this.recurNum = 0
//   }

//   init() {
//     for (let i = 0; i < this.numOfRooms; i++) {
//       this.createRoom(i)
//     }

//     this.spacer()
//     this.randomSquares()

//     // // Room Intersect Tests
//     // let aObj = { ...roomObj }
//     // let bObj = { ...roomObj }

//     // aObj = {
//     //   dimX: 20, 
//     //   dimY: 20,
//     //   locX: 35, 
//     //   locY: 24
//     // }

//     // // 35 + 20 = x = 55
//     // // 24 + 20 = y = 44
//     // bObj = {
//     //   dimX: 17, 
//     //   dimY: 21,
//     //   locX: 17, 
//     //   locY: 20
//     // }

//     // this.mapArr.push(aObj)
//     // this.mapArr.push(bObj)
//     this.createDoors()
//     this.createHalls()
//   }

//   randomSquares() {
//     for (let i = 0; i < this.mapArr.length; i++) {
//       let random = rand(0, 100)
//       if (random < 20 || random > 80) {
//         let enemy = this.enemy.createEnemies(this.lvl)

//         enemy.locX = rand(
//           this.mapArr[i].locX + 20, 
//           this.mapArr[i].locX + this.mapArr[i].dimX - 20
//         )
//         enemy.locY = rand(
//           this.mapArr[i].locY + 20, 
//           this.mapArr[i].locY + this.mapArr[i].dimY - 20
//         )

//         this.enemies.push(enemy)

//       } else if ((random > 20 && random < 35) || (random < 80 && random > 65)) {
//         let health = this.item.createHealth()

//         health.locX = rand(
//           this.mapArr[i].locX + 20, 
//           this.mapArr[i].locX + this.mapArr[i].dimX - 20
//         )
//         health.locY = rand(
//           this.mapArr[i].locY + 20, 
//           this.mapArr[i].locY + this.mapArr[i].dimY - 20
//         )

//         this.items.push(health)

//       } else if (
//         !this.placed.weapon && 
//         ((random > 40 && random < 60) || i === this.numOfRooms-1)
//       ) {
//         let weapon = this.item.createWeapon(this.lvl)

//         weapon.locX = rand(
//           this.mapArr[i].locX + 20, 
//           this.mapArr[i].locX + this.mapArr[i].dimX - 20
//         )
//         weapon.locY = rand(
//           this.mapArr[i].locY + 20, 
//           this.mapArr[i].locY + this.mapArr[i].dimY - 20
//         )

//         this.items.push(weapon)
//         this.placed.weapon = true
//       }
//     }
//   }
  
//   checkIntersect(a1,a2, b1,b2) {
//     if (a1 < b2 && a2 > b1) {
//       // calc how much the ranges intersect
//       let dist1 = b2 - a1
//       let dist2 = a2 - b1

//       if (dist1 <= dist2) {
//         // x shift up
//         // y shift down
//         return dist1
//       } else {
//         // x shift down
//         // y shift up
//         return dist2 *-1
//       }
//     } else {
//       // no problems
//       return 0
//     }
//   }

//   createDoors() {
//     for (let i = 0; i < this.mapArr.length; i++) {
//       // Create Doors
//       // 1. Look at sides for surrounding walls
//       // 2. Create # of doors based on 1.
//       // 3. Generate door locations ( x, y )
//       // 4. Store doors
//       // max doors === 4
      
//       // Top
//       if (this.mapArr[i].locY - (this.max + this.hallPad) > 0) {
//         let x = rand(this.mapArr[i].locX, this.mapArr[i].locX + this.mapArr[i].dimX)
//         let y = this.mapArr[i].locY

//         this.mapArr[i].doors.push([x,y])
//         this.doors.push([x,y])
//       }

//       // Right
//       if (this.mapArr[i].locX + (this.max + this.hallPad) < mapSize[0]) {
//         let x = this.mapArr[i].locX + this.mapArr[i].dimX
//         let y = rand(this.mapArr[i].locY, this.mapArr[i].locY + this.mapArr[i].dimY)

//         this.mapArr[i].doors.push([x,y])
//         this.doors.push([x,y])
//       }

//       // Bottom
//       if (this.mapArr[i].locY + (this.max + this.hallPad) < mapSize[1]) {
//         let x = rand(this.mapArr[i].locX, this.mapArr[i].locX + this.mapArr[i].dimX)
//         let y = this.mapArr[i].locY + this.mapArr[i].dimY

//         this.mapArr[i].doors.push([x,y])
//         this.doors.push([x,y])
//       }

//       // Left
//       if (this.mapArr[i].locX - (this.max + this.hallPad) < 0) {
//         let x = this.mapArr[i].locX
//         let y = rand(this.mapArr[i].locY, this.mapArr[i].locY + this.mapArr[i].dimY)

//         this.mapArr[i].doors.push([x,y])
//         this.doors.push([x,y])
//       }
//     }
//   }

//   createHalls() {
//     let dors = []

//     // 1. itterate through all xy coords
//     // 2. compare all coords for dupes
//     // 3. delete dupes with the smallest distance -> sDist.min
//     // 4. recreate paths with smallest distance remaining

//     for (let i = 0; i < this.doors.length; i++) {
//       for (let j = i+1; j < this.doors.length; j++) {
//         let dist = Math.sqrt(
//           Math.pow((this.doors[i][0] - this.doors[j][0]), 2) + 
//           Math.pow((this.doors[i][1] - this.doors[j][1]), 2)
//         )

//         let room = {
//           dist: dist,
//           a: this.doors[i],
//           b: this.doors[j]
//         }

//         dors.push(room)
//       }
//     }

//     console.log(dors.length)

//     // dors.sort((a,b) => {
//     //   return a.dist - b.dist
//     // })

//     // // let drs = [ ...dors ]

//     //   for (let i = 0; i < dors.length; i++) {
//     //     for (let j = i+1; j < dors.length; j++) {
//     //       if (
//     //         // dors[0].a[0] === dors[1].a[0] 1370 === 1370
//     //         // dors[0].a[1] === dors[1].a[1] 311 === 311 
//     //         dors[i] !== undefined &&
//     //         dors[j] !== undefined &&
//     //         dors[i].a[0] === dors[j].a[0] &&
//     //         dors[i].a[1] === dors[j].a[1] &&
//     //         dors[i].dist < dors[j].dist
//     //       ) {
//     //         dors.splice(j, 1, undefined)
//     //       } else if (
//     //         dors[i] !== undefined &&
//     //         dors[j] !== undefined &&
//     //         dors[i].a[0] === dors[j].b[0] &&
//     //         dors[i].a[1] === dors[j].b[1] &&
//     //         dors[i].dist < dors[j].dist
//     //       ) {
//     //         dors.splice(j, 1, undefined)
//     //       } else if (
//     //         dors[i] !== undefined &&
//     //         dors[j] !== undefined &&
//     //         dors[i].b[0] === dors[j].b[0] &&
//     //         dors[i].b[1] === dors[j].b[1] &&
//     //         dors[i].dist < dors[j].dist
//     //       ) {
//     //         dors.splice(j, 1, undefined)
//     //       } else if (
//     //         dors[i] !== undefined &&
//     //         dors[j] !== undefined &&
//     //         dors[i].b[0] === dors[j].a[0] &&
//     //         dors[i].b[1] === dors[j].a[1] &&
//     //         dors[i].dist < dors[j].dist
//     //       ) {
//     //         dors.splice(j, 1, undefined)
//     //       } 
//     //     }
//     //   }

//     // dors = dors.filter(x => x !== undefined)

//     for (let i = 0; i < dors.length; i++) {
//       for (let j = i + 1; j < dors.length; j++) {
//         if (
//           dors[i].a[0] === dors[j].a[0] &&
//           dors[i].a[1] === dors[j].a[1]
//         ) {
//           if (dors[i].dist < dors[j].dist) {
//             dors.splice(j, 1)
//             j--
//           } else {
//             dors.splice(i, 1)
//           }
//         } else if (
//           dors[i].a[0] === dors[j].b[0] &&
//           dors[i].a[1] === dors[j].b[1]
//         ) { 
//           if (dors[i].dist < dors[j].dist) {
//             dors.splice(j, 1)
//             j--
//           } else {
//             dors.splice(i, 1)
//           }
//         } else if (
//           dors[i].b[0] === dors[j].b[0] &&
//           dors[i].b[1] === dors[j].b[1]
//         ) {
//           if (dors[i].dist < dors[j].dist) {
//             dors.splice(j, 1)
//             j--
//           } else {
//             dors.splice(i, 1)
//           }
//         } else if (
//           dors[i].b[0] === dors[j].a[0] &&
//           dors[i].b[1] === dors[j].a[1]
//         ) {
//           if (dors[i].dist < dors[j].dist) {
//             dors.splice(j, 1)
//             j--
//           } else {
//             dors.splice(i, 1)
//           }
//         }
//       }
//     }   


//     console.log(dors)










































//     // for (let i = 0; i < this.doors.length; i++) {
//     //   let sDist = {
//     //     min: 1920,
//     //     x1: 0,
//     //     y1: 0,
//     //     x2: 0,
//     //     y2: 0,
//     //     i: 0,
//     //     j: 0
//     //   }

//     //   for (let j = i+1; j < this.doors.length; j++) {
//     //     let dist = Math.sqrt(
//     //       Math.pow((this.doors[i][0] - this.doors[j][0]), 2) + 
//     //       Math.pow((this.doors[i][1] - this.doors[j][1]), 2)
//     //     )

//     //     if (dist < sDist.min) {
//     //       sDist.min = dist
//     //       sDist.x1 = this.doors[i][0]
//     //       sDist.y1 = this.doors[i][1]
//     //       sDist.x2 = this.doors[j][0]
//     //       sDist.y2 = this.doors[j][1]
//     //       sDist.i = i
//     //       sDist.j = j
//     //     }
//     //   }

//     //   dors.push(sDist)
//     // }

//     // for (let i = 0; i < dors.length; i++) {
//     //   for (let j = 0; j < dors.length; j++) {
        
//     //   }
//     // }

//     // for (let i = 0; i < dors.length; i++) {
//     //   for (let j = i+1; j < dors.length; j++) {
        
//     //   }
//     // }

//     this.hallway = [ ...dors ]

//     // console.log(this.hallway)
//   }

//   createRoom(i) {
//     let room = { ...roomObj }

//     room.dimX = rand(this.min, this.max)
//     room.dimY = rand(this.min, this.max)
//     room.locX = rand(300, mapSize[0] -300)
//     room.locY = rand(300, mapSize[1] -300)
//     room.id = i

//     if (room.id === 0) {
//       room.type = 'start'
//     }

//     this.mapArr.push(room)
//   }

//   everything() {
//     // this.enemies //? 
//     return {
//       items: this.items,
//       enemies: this.enemies,
//       hallways: this.hallway,
//       rooms: this.mapArr
//     }
//   }

//   spacer() {
//     let recur = false
//     this.recurNum++

//     for (let i = 0; i < this.mapArr.length; i++) {
//       for (let j = 0; j < this.mapArr.length; j++) {
//         // console.log(this.mapArr[i])
//         // console.log(this.mapArr[j])

//         // Check for intersects
//         let xCol = this.checkIntersect(
//           this.mapArr[i].locX,
//           this.mapArr[i].locX + this.mapArr[i].dimX,
//           this.mapArr[j].locX,
//           this.mapArr[j].locX + this.mapArr[j].dimX
//         )

//         let yCol = this.checkIntersect(
//           this.mapArr[i].locY,
//           this.mapArr[i].locY + this.mapArr[i].dimY,
//           this.mapArr[j].locY,
//           this.mapArr[j].locY + this.mapArr[j].dimY
//         )

//         // if both xCol and yCol then they are intersecting
//         if (xCol !== 0 && yCol !== 0) {
//           recur = true

//           if (Math.abs(xCol) < Math.abs(yCol)) {

//             let dist = Math.floor((Math.abs(xCol) + this.hallPad) / 2)

//             // xCol needs to shift
//             if (
//               xCol < 0 &&
//               this.mapArr[i].locX - dist > 0 &&
//               this.mapArr[j].locX + dist < mapSize[0]
//             ) {
//               // shift left
//               this.mapArr[i].locX -= dist
//               this.mapArr[j].locX += dist
//             } else if (
//               xCol > 0 &&
//               this.mapArr[i].locX + dist < mapSize[0] &&
//               this.mapArr[j].locX - dist > 0
//             ) {
//               // shift right
//               this.mapArr[i].locX += dist
//               this.mapArr[j].locX -= dist
//             }
//           } else {
//             // yCol needs to shift
//             let dist = Math.floor((Math.abs(yCol) + this.hallPad) / 2)

//             if (
//               yCol < 0 &&
//               this.mapArr[i].locY + dist < mapSize[1] &&
//               this.mapArr[j].locY - dist > 0
//             ) {
//               // shift up
//               this.mapArr[i].locY -= dist
//               this.mapArr[j].locY += dist
//             } else if (
//               yCol < 0 &&
//               this.mapArr[i].locY + dist > 0 &&
//               this.mapArr[j].locY - dist < mapSize[1]
//             ) {
//               // shift down
//               this.mapArr[i].locY += dist
//               this.mapArr[j].locY -= dist
//             }
//           }
//         } else {
//           // BUT we should make sure there is 
//           // enough spacing around the sides for 
//           // running our paths

//           // 1. Determine which side the room it is on
//           // 2. Check negative space between them
//           // 3. If less than this.hallPad adjust the locX & locY coordinates

//           const top = this.mapArr[i].locY - (this.mapArr[j].locY + this.mapArr[j].dimY)
//           const right = this.mapArr[j].locX - (this.mapArr[i].locX + this.mapArr[i].dimX)
//           const bottom = this.mapArr[j].locY - (this.mapArr[i].locY + this.mapArr[i].dimY)
//           const left = this.mapArr[i].locX - (this.mapArr[j].locX + this.mapArr[j].dimX)

//           if (top > 0 && top < this.hallPad) {
//             const dist = this.hallPad - top
//             this.mapArr[j].locX -= dist
//             recur = true
//           }

//           if (right > 0 && right < this.hallPad) {
//             const dist = this.hallPad - right
//             this.mapArr[j].locX += dist
//             recur = true
//           }

//           if (bottom > 0 && bottom < this.hallPad) {
//             const dist = this.hallPad - bottom
//             this.mapArr[j].locY += dist
//             recur = true
//           }

//           if (left > 0 && left < this.hallPad) {
//             const dist = this.hallPad - left
//             this.mapArr[j].locX -= dist
//             recur = true
//           }
//         }
//       }
//     }

//     if (this.recurNum === this.limit) recur = false
//     if (recur) this.spacer()
//   }
// }
