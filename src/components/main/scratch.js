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


















// if (
//   locX < this.mapArr[i].locX + this.mapArr[i].dimX &&
//   locX + dimX > this.mapArr[i].locX &&
//   locY < this.mapArr[i].locY + this.mapArr[i].dimY &&
//   locY + dimY > this.mapArr[i].locY
// ) {
//   console.log('Collision Detected!')

//   // initial room
//   let xa1 = locX
//   let ya1 = locY
//   let xb1 = locX + dimX
//   let yb1 = locY + dimY

//   // rooms around
//   let xa2 = this.mapArr[i].locX
//   let ya2 = this.mapArr[i].locY
//   let xb2 = this.mapArr[i].locX + this.mapArr[i].dimX
//   let yb2 = this.mapArr[i].locY + this.mapArr[i].locY

//   let diag1x = Math.abs(xa1 - xb2) // inner topLeft - bottomRight
//   let diag1y = Math.abs(ya1 - yb2) // inner topLeft - bottomRight
//   let diag2x = Math.abs(xb1 - xa2) // outer topLeft - bottomRight
//   let diag2y = Math.abs(yb1 - ya2) // outer topLeft - bottomRight

//   console.log(diag1x)
//   console.log(diag1y)
//   console.log(diag2x)
//   console.log(diag2y)

//   // Check for top collision
//   // if (
//   //   diag1y < diag2y &&
//   //   diag1y < diag1x &&
//   //   diag1y < diag2x
//   // ) {
//   //   console.log('top collision')
//   // }
//   // Check for top collision
//   if (diag1y < diag2y) {
//     if (diag1y < diag1x && diag1y < diag2x) {
//       console.log('top collision')
//     } else if (diag1x < diag2x) {
//       console.log('topLeft collision')
//     } else {
//       console.log('topRight collision')
//     }
//   }

//   // Check for right collision
//   if (
//     diag1x < diag2x &&
//     diag1x < diag1y &&
//     diag1x < diag2y
//   ) {
//     console.log('right collision')
//   }

//   // Check for bottom collision
//   if (diag2y < diag1y) {
//     if (diag2y < diag1x && diag2y < diag2x) {
//       console.log('bottom collision')
//     } else if (diag1x < diag2x) {
//       console.log('bottomLeft collision')
//     } else {
//       console.log('bottomRight collision')
//     }
//   }

//   // Check for left collision
//   if (
//     diag2x < diag1x &&
//     diag2x < diag2y &&
//     diag2x < diag1y
//   ) {
//     console.log('right collision')
//   }
// }

// // Delete this after checks
// if (collision !== 'none') {
//   console.log(collision)
// }

// if (
//   collCount > 1 && 
//   dimX > this.max / 2 && 
//   dimY > this.max / 2
// ) {
//   // divide room by 2
//   // then check again
//   dimX = dimX / 2
//   dimY = dimY / 2 
//   this.checkIntersect(locX, locY, dimX, dimY)
// } else if (collCount > 1) {
//   // delete the room
//   collision = {
//     locX: 0,
//     locY: 0,
//     dimX: 0,
//     dimY: 0
//   }
// }

// switch (collision) {
//   case 'collides top':
//     let dist = (r2.y + r2.h) - r1.y
//     locY = locY + dist + this.doorSize
//     this.checkIntersect(locX, locY, dimX, dimY)
//     break

//   case 'collides right':
    
//     break

//   case 'collides bottom':
    
//     break

//   case 'collides left':
    
//     break

//   default:
//     break
// }












































// Needs async logic
// import { rand } from '../utils'
// import Item from '../items'
// import Enemies from '../enemies'

// const mapSize = [1920, 1080] // 1920 x 1080 
// // const mapSize = [20, 30]
// let roomObj = {
//   coll: 0,
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
//     this.doorSize = 30
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
//     this.createFirstRoom()
//     this.createRooms()
//   }

//   // checkIntersect(a1,a2, b1,b2) {
//   //   if (a1 < b2 && a2 > b1) {
//   //     // calc how much the ranges intersect
//   //     let dist1 = b2 - a1
//   //     let dist2 = a2 - b1

//   //     if (dist1 <= dist2) {
//   //       // x shift up
//   //       // y shift down
//   //       return dist1
//   //     } else {
//   //       // x shift down
//   //       // y shift up
//   //       return dist2 * -1
//   //     }
//   //   } else {
//   //     // no problems
//   //     return 0
//   //   }
//   // }

//   checkIntersect(room) {
//     let collision = 'none'
//     let collCounter = 0
//     let dist = 0

//     for (let i = 0; i < this.mapArr.length; i++) {
//       const r1 = {
//         x: room.locX,
//         y: room.locY,
//         w: room.dimX,
//         h: room.dimY
//       }

//       const r2 = {
//         x: this.mapArr[i].locX,
//         y: this.mapArr[i].locY,
//         w: this.mapArr[i].dimX,
//         h: this.mapArr[i].dimY
//       }

//       const dx = (r1.x + r1.w / 2) - (r2.x + r2.w / 2)
//       const dy = (r1.y + r1.h / 2) - (r2.y + r2.h / 2)
//       const width = (r1.w + r2.w) / 2
//       const height = (r1.h + r2.h) / 2
//       const crossWidth = width * dy
//       const crossHeight = height * dx

//       if (Math.abs(dx) <= width && Math.abs(dy) <= height) {
//         console.log('Collision Detected!!!')
//         if (crossWidth < crossHeight) {
//           collCounter++
//           collision = crossWidth > -crossHeight ? 'left' : 'bottom'
//         } else {
//           collCounter++
//           collision = crossWidth > -crossHeight ? 'top' : 'right'
//         }
//       }

//       // return collision dist as well as side
//       switch (collision) {
//         case 'top':
//           dist = Math.abs((r2.y + r2.h) - r1.y + this.doorSize)
//           console.log('collision top', dist)
//           break

//         case 'right':
//           dist = Math.abs((r1.x + r1.w) - r2.x + this.doorSize)
//           console.log('collision right', dist)
//           break

//         case 'bottom':
//           dist = Math.abs((r1.y + r1.h) - r2.y + this.doorSize)
//           console.log('collision bottom')
//           break

//         case 'left':
//           console.log('col left col room',this.mapArr[i].id)
//           dist = Math.abs((r2.x + r2.w) - r1.x + this.doorSize)
//           console.log('collision left')
//           break
      
//         default:
//           break
//       }
//     }

//     console.log('Collision Counter: ', collCounter)

//     if (collCounter >= 2) {
//       return {collision: 'delete', dist: 0}
//     } else {
//       console.log('dist', dist)
//       return {collision: collision, dist: dist}
//     }
//   }

//   checkWalls(room, dir) {
//     let doors = []
//     const [ locX, locY, dimX, dimY ] = [ room.locX, room.locY, room.dimX, room.dimY ]

//     // Check: enough space for new room
//     // Top
//     if (locY - (this.hallPad + this.max) > 0 && dir !== 'top') {
//       doors.push({
//         coords: [
//           rand(locX + this.doorSize, locX + dimX - this.doorSize),
//           locY - this.doorSize
//         ],
//         dir: 'top',
//         placed: false
//       })
//     }

//     // Right
//     if (locX + dimX + (this.hallPad + this.max) < mapSize[0] && dir !== 'right') {
//       doors.push({
//         coords: [
//           locX + dimX,
//           rand(locY + this.doorSize, locY + dimY - this.doorSize)
//         ],
//         dir: 'right',
//         placed: false
//       })
//     }

//     // Bottom
//     if (locY + dimY + (this.hallPad + this.max) < mapSize[1] && dir !== 'bottom') {
//       doors.push({
//         coords: [
//           rand(locX + this.doorSize, locX + dimX - this.doorSize),
//           locY + dimY
//         ],
//         dir: 'bottom',
//         placed: false
//       })
//     }

//     // Left
//     if (locX - (this.hallPad + this.max) > 0 && dir !== 'left') {
//       doors.push({
//         coords: [
//           locX - this.doorSize,
//           rand(locY + this.doorSize, locY + dimY - this.doorSize)
//         ],
//         dir: 'left',
//         placed: false
//       })
//     }

//     return doors
//   }

//   createFirstRoom() {
//     let room = JSON.parse(JSON.stringify(roomObj))
//     room.dimX = rand(this.min, this.max)
//     room.dimY = rand(this.min, this.max)
//     room.locX = rand(this.max, mapSize[0]-this.max)
//     room.locY = rand(this.max, mapSize[1]-this.max)
//     room.type = 'start'

//     room.doors = this.checkWalls(room)

//     this.mapArr.push(room)
//   }

//   createRoom(doorIndex, prevDoor) {
//     let room = JSON.parse(JSON.stringify(roomObj))
//     let obj = {}
//     let col = ''
//     let dist = 0

//     room.dimX = rand(this.min, this.max)
//     room.dimY = rand(this.min, this.max)

//     room.id = this.mapArr.length

//     switch (prevDoor.dir) {
//       case 'top':
//         room.locX = rand(
//           prevDoor.coords[0] - room.dimX + this.doorSize,
//           prevDoor.coords[0]
//         )
//         room.locY = prevDoor.coords[1] - room.dimY

//         console.log('Room Top', room.id)
//         obj = this.checkIntersect(room)
//         col = obj.collision
//         dist = obj.dist

//         if (col === 'delete' && dist === 0) {
//           prevDoor.coords = [undefined, undefined]
//           break
//         }

//         if (dist > 0) {
//           room = this.moveRoom(doorIndex, room, prevDoor.dir, col, dist)
//         }

//         room.doors = this.checkWalls(room, 'bottom')

//         this.mapArr.push(room)
//         this.createRooms()
//         break

//       case 'right':
//         room.locX = prevDoor.coords[0] + this.doorSize
//         room.locY = rand(
//           prevDoor.coords[1] - room.dimY + this.doorSize,
//           prevDoor.coords[1]
//         )

//         console.log('Room Right', room.id)
//         obj = this.checkIntersect(room)
//         col = obj.collision
//         dist = obj.dist

//         if (col === 'delete' && dist === 0) {
//           prevDoor.coords = [undefined, undefined]
//           break
//         }
        
//         if (dist > 0) {
//           room = this.moveRoom(doorIndex, room, prevDoor.dir, col, dist)
//         }

//         room.doors = this.checkWalls(room, 'left')
//         this.mapArr.push(room)
//         // this.createRooms()
//         break

//       // case 'bottom':
//       //   room.locX = rand(
//       //     prevDoor.coords[0] + room.dimX + this.doorSize,
//       //     prevDoor.coords[0]
//       //   )
//       //   room.locY = prevDoor.coords[1] - room.dimY

//       //   console.log('Room Bottom', room.id)
//       //   obj = this.checkIntersect(room)
//       //   col = obj.collision
//       //   dist = obj.dist

//       //   if (col === 'delete' && dist === 0) {
//       //     prevDoor.coords = [undefined, undefined]
//       //     return
//       //   }
        
//       //   if (dist > 0) {
//       //     console.log('door index', doorIndex)
//       //     console.log(prevDoor)
//       //     room = this.moveRoom(doorIndex, room, col, dist)
//       //   }

//       //   console.log('Room Bottom Obj')
//       //   console.log(room)

//       //   room.doors = this.checkWalls(room, 'top')
//       //   this.mapArr.push(room)
//       //   // this.createRooms()
//       //   break

//       // case 'left':
//       //   room.locX = prevDoor.coords[0] - this.doorSize
//       //   room.locY = rand(
//       //     prevDoor.coords[1] - room.dimY + this.doorSize,
//       //     prevDoor.coords[1]
//       //   )

//       //   console.log(room.id)
//       //   console.log('Room Left')
//       //   room.doors = this.checkWalls(room.locX, room.locY, room.dimX, room.dimY, 'right')
//       //   this.checkIntersect(room.locX, room.locY, room.dimX, room.dimY)
//       //   this.mapArr.push(room)
//       //   // this.createRooms()
//       //   break
    
//       default:
//         break
//     }

//     // this.mapArr.push(room)
//     // this.createRooms()
//   }

//   createRooms() {
//     let prevRoom = this.mapArr[this.mapArr.length - 1]

//     for (let i = 0; i < prevRoom.doors.length; i++) {
//       this.createRoom(i, prevRoom.doors[i])
//     }
//   }

//   moveRoom(doorIndex, room, dorDir, dir, dist) {
//     console.log('Started the moveRoom')

//     let prevRoom = this.mapArr[room.id - 1]
//     let door = prevRoom.doors[doorIndex]

//     if (door === undefined) {
//       room.locX = undefined
//       room.locY = undefined
//     }

//     console.log('door index', doorIndex)
//     console.log(prevRoom.doors)

//     switch (dir) {
//       case 'top':
//         switch (dorDir) {
//           // case 'top':            
//           //   console.log('door top')
//           //   break
    
//           case 'right':
//             // dist = (r1.x + r1.w) - r2.x + this.doorSize
//             door.locY = door.locY - dist
//             room.dimY = room.dimY - dist
//             room.locY = room.locY + dist
//             console.log('door right')
//             break
    
//           case 'bottom':
//             // dist = r2.y - r1.y + this.doorSize
//             console.log('door bottom')
//             break
    
//           case 'left':
//             // dist = r1.x - r2.x + this.doorSize
//             console.log('door left')
//             break
        
//           default:
//             break
//         }

//         console.log('collision top', dist)
//         break

//       case 'right':
//         switch (dorDir) {
//           // case 'top':            
//           //   console.log('door top')
//           //   break
    
//           case 'right':
//             room.dimY = room.dimY - dist
//             room.locY = room.locY + dist
//             console.log('door right')
//             break
    
//           case 'bottom':
//             console.log('door bottom')
//             break
    
//           case 'left':
//             console.log('door left')
//             break
        
//           default:
//             break
//         }

//         console.log('collision right', dist)
//         break

//       case 'bottom':
//         switch (dorDir) {
//           // case 'top':            
//           //   console.log('door top')
//           //   break
    
//           case 'right':
//             // room.dimY = room.dimY - dist
            
//             console.log('door right')
//             break
    
//           case 'bottom':
//             console.log('door bottom')
//             break
    
//           case 'left':
//             console.log('door left')
//             break
        
//           default:
//             break
//         }

//         console.log('collision bottom')
//         break

//       case 'left':
//         switch (dorDir) {
//           // case 'top':            
//           //   console.log('door top')
//           //   break
    
//           case 'right':
//             door.dimX = door.dimX + dist
//             room.locX = room.locX + dist
//             console.log('door right')
//             break
    
//           case 'bottom':
//             console.log('door bottom')
//             break
    
//           case 'left':
//             console.log('door left')
//             break
        
//           default:
//             break
//         }

//         console.log('collision left')
//         break
    
//       default:
//         break
//     }

//     return room
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

//   createDoors() {

//   }

//   createHalls() {

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
// }










// export default class Room {
//   constructor(minX,minY,maxX,maxY){
//     this.minX = minX;
//     this.minY = minY;
//     this.maxX = maxX;
//     this.maxY = maxY;
//     this.side=0;
//     this.children = [];
//   }

//   addRoom(room){
//       room.side = this.side+=1;
//       this.children.push(room);
//   }

//   // static isRoomInsideAABB(room) {
//   //     return (room.x >= this.minX && room.x <= this.maxX) &&
//   //         (room.y >= this.minY && room.y <= this.maxY);
//   // }
  

//   static checkIntersect (room) {
//     this.mapArr.forEach((v,k) => {
//       if (v.id !== room.id) {
//         const dx = (room.locX + room.dimX / 2) - (v.locX + v.dimX / 2)
//         const dy = (room.locY + room.dimY / 2) - (v.locY + v.dimY / 2)
//         const width = (room.dimX + v.dimX) / 2
//         const height = (room.dimY + v.dimY) / 2
//         const crossWidth = width * dy
//         const crossHeight = height * dx
  
//         if (Math.abs(dx) <= width && Math.abs(dy) <= height) {
//           console.log('Collision Detected!!!')
//           room.coll++
//           if (crossWidth < crossHeight) {
//             collision = crossWidth > -crossHeight ? 'left' : 'bottom'
//           } else {
//             collision = crossWidth > -crossHeight ? 'top' : 'right'
//           }
  
//           console.log('calc dist')
//           dist = this.genCollision[collision](v, room)
  
//           // Delete after debugging
//           if (dist > 0) {
//             console.log('Dist:', dist)
//           }
//         }
//       }
//     })
//   }
// }

// main = new Room(0,0,10,10)
// top = new Room(0,0,10,10)
 
// main.addRoom(top)

// const checkIntersect = (room) => {
//   console.log('checking intersect')
//   let collision = 'none'
//   let dist = 0

//   this.mapArr.forEach((v,k) => {
//     if (v.id !== room.id) {
//       const dx = (room.locX + room.dimX / 2) - (v.locX + v.dimX / 2)
//       const dy = (room.locY + room.dimY / 2) - (v.locY + v.dimY / 2)
//       const width = (room.dimX + v.dimX) / 2
//       const height = (room.dimY + v.dimY) / 2
//       const crossWidth = width * dy
//       const crossHeight = height * dx

//       if (Math.abs(dx) <= width && Math.abs(dy) <= height) {
//         console.log('Collision Detected!!!')
//         room.coll++
//         if (crossWidth < crossHeight) {
//           collision = crossWidth > -crossHeight ? 'left' : 'bottom'
//         } else {
//           collision = crossWidth > -crossHeight ? 'top' : 'right'
//         }

//         console.log('calc dist')
//         dist = this.genCollision[collision](v, room)

//         // Delete after debugging
//         if (dist > 0) {
//           console.log('Dist:', dist)
//         }
//       }
//     }
//   })

//   if (room.coll > 1) {
//     console.log('Collision Counter1: ', room.coll)
//     return {rom: room, collision: 'delete', dist: 0}
//   } else {
//     console.log('Collision Counter2: ', room.coll)
//     return {rom: room, collision, dist}
//   }
// }






// createMap(that) {
//   let canvas = document.createElement('canvas')
//   canvas.id = 'tmp'
//   document.body.appendChild(canvas)

//   this.canvas = document.getElementById('tmp')
//   this.context = this.canvas.getContext('2d')

//   this.canvas.width = that.map.size[0]
//   this.canvas.height = that.map.size[1]

//   let box = {
//     loc: [0,0],
//     size: [200,200]
//   }

//   let box2 = {
//     loc: [0,0],
//     size: [40,201]
//   }

//   console.log((that.youEntity.x) - (box.size[0] / 2))
//   console.log((that.youEntity.y) - (box.size[1] / 2))

//   box.loc = [
//     (that.youEntity.x) - (box.size[0] / 2),
//     (that.youEntity.y) - (box.size[1] / 2)
//   ]
//   box2.loc = [
//     box.loc[0] + box.size[0] - box2.size[0],
//     box.loc[1] - box2.size[1] + 1
//   ]

//   entityRect(
//     this.context, 
//     box.loc[0], box.loc[1], 
//     box.size[0], box.size[1], 
//     'white'
//   )

//   entityRect(
//     this.context, 
//     box2.loc[0], box2.loc[1], 
//     box2.size[0], box2.size[1], 
//     'white'
//   )

//   return this.canvas.toDataURL('image/png')
// }



      // // Find the verical & horizontal distX/distY between 
      // // the center of the circle and the center of the square
      // let distX = Math.abs(x - enmi.loc[0] - enmi.dim[0]/2)
      // let distY = Math.abs(y - enmi.loc[1] - enmi.dim[1]/2)

      // // If the distance is > than halves === not close enough
      // if (distX > (enmi.dim[0]/2 + 10)) { collided = false }
      // if (distY > (enmi.dim[1]/2 + 10)) { collided = false }

      // // If distance is < than halfRect === colliding
      // if (distX <= (enmi.dim[0]/2)) { collided = true }
      // if (distX <= (enmi.dim[1]/2)) { collided = true }

      // // Pythangorean Theorem to compare
      // let dx = distX - enmi[0]/2
      // let dy = distY - enmi[1]/2
      // if (dx * dx + dy * dy <= 15*15) { collided = true }

      // if (collided === true) { console.log('deleat meh plz 2') } 

      // if (
      //   rect1.x < rect2.x + rect2.width &&
      //   rect1.x + rect1.width > rect2.x &&
      //   rect1.y < rect2.y + rect2.height &&
      //   rect1.height + rect1.y > rect2.y
      // ) {
        
      // }

      // if (
      //   x < v.locX + v.dimX &&
      //   x + 15 > v.locX &&
      //   y < v.locY + v.dimY &&
      //   y + 15 > v.locY
      // ) {
      //   console.log('remove enemy')
      // }

      // console.log('1')
      // console.log(x + 5, (locX - v.locX) + 15, x + 5 < (locX - v.locX) + 15)
      // console.log(x - 5, locX - v.locX, x - 5 > (locX - v.locX))
      // console.log(y + 5, (locY - v.locY) + 15, y + 5 < (locY - v.locX) + 15)
      // console.log(y - 5, locY - v.locY, y - 5 > (locY - v.locY))

      // if (
      //   x + 20 <= (locX - v.locX) + 20 &&
      //   x - 15 >= (locX - v.locX) &&
      //   y + 15<= (locY - v.locY) + 20 &&
      //   y - 15 >= (locY - v.locY)
      // ) {
      //   console.log('deleat meh plz 2')
      // }


  // // white = move
  // if (
  //   data[0] === 255 &&
  //   data[1] === 255 &&
  //   data[2] === 255 &&
  //   data[3] === 255
  // ) {
  //   return true
  // }