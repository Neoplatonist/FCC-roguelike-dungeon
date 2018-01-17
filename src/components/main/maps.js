import { rand } from './utils'

const mapSize = [192, 108] // 1920 x 1080 
let mapArr = []
let roomObj = {
  dimX: 0, 
  dimY: 0,
  locX: 0, 
  locY: 0,
  id: 0
}

export default class Map {
  constructor() {
    [ this.min , this.max ] = [ 2, 30 ]
  }

  init() {
    mapArr.push(initRoom())
    console.log(mapArr[0])

    let topLeft = [mapArr[0].locX, mapArr[0].locY]
    let bottomRight = [
      mapArr[0].locX + mapArr[0].dimX, 
      mapArr[0].locY + mapArr[0].dimY
    ]

    // Distances 
    let dist = {
      top: topLeft[1] - 0,
      right: mapSize[0] - bottomRight[0],
      bottom: mapSize[1] - bottomRight[1],
      left: topLeft[0] - 0
    }

    let big = ''
    if (dist.top > dist.right) {
      big = 'top'
    } else {
      big = 'right'
    }

    if (dist[big] < dist.bottom) {
      big = 'bottom'
    }

    if (dist[big] < dist.left) {
      big = 'left'
    }

    console.log(dist)
    console.log(dist[big])























    // this.createRoom(1)

    // this.gen = this.generator()

    // console.log(this.gen.next().value)
    // console.log(this.gen.next().value)
    // console.log(this.gen.next().value)
    // console.log(this.gen.next().value)
  }

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

  createRoom(x) {
    // let finished = false
    let room = { ...roomObj }

    room = {
      dimX: rand(this.min, this.max),
      dimY: rand(this.min, this.max),
      locX: rand(0, mapSize[0]),
      locY: rand(0, mapSize[1]),
      id: x
    }

    mapArr.push(room)

    // if (wall) {
    //   finished = true
    // }

    // if (!finished) {
    //   this.createRoom(x++)
    // }
  }

  spacing() {

  }
}

const initRoom = () => {
  let [ min, max ] = [ 7, 25 ]
  let [ dimX, dimY ] = [ rand(min, max), rand(min, max) ]
  let room = { ...roomObj }

  room = {
    dimX: dimX, 
    dimY: dimY,
    locX: rand(0, mapSize[0]-dimX), 
    locY: rand(0, mapSize[1]-dimY),
    id: 0
  }

  return room
}

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

