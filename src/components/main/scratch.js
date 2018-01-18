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