export default class Map {
  init() {

  }

  gen() {
    function* generator(i) {
      yield i
    }
  }
}


const mapSize = [1920, 1080]
let mapArr = []
const rand = Math.ceil(Math.random() * 100)

if (rand < 10 && rand > 90) { // 20% room
  room(rand)
} else if (rand > 10 && rand < 40) { // 30% hallway
  hallway()
} else ( // 50% empty
  // haha tis blank space
  console.log('haha tis blank space')
)

function room(rand) {
  // THINGS WE WANT!!!
  // At least a certain # of rooms
  // At least a certain size

  if (rand < 50) {
    
  }
}

function hallway(rand) {
  // THINGS WE WANT!!!
  // At least a certain # of hallways
  // no more than a certain length
  if (rand < 50) {
    
  }
}




