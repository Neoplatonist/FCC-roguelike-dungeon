import { rand } from './utils'

export default class Map {
  init() {
    mapArr.push(initRoom())
    console.log(mapArr)
  }

  gen() {
    function* generator(i) {

      yield i
    }

    generator()
  }
}


const mapSize = [192, 108] // 1920 x 1080 
let mapArr = []
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


function initRoom() {
  let min = 7
  let max = 25
  let room = {
    dimX: rand(min, max), 
    dimY: rand(min, max),
    locX: rand(0, mapSize[0]), 
    locY: rand(0, mapSize[1]),
    id: 0
  }

  return room
}




