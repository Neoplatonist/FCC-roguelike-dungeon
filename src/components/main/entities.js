import { entityRect, entityCirc } from './utils'

export default class Entities {
  background(that, x,y) {
    // Background
    entityRect(that, 0, 0, x, y, 'black')
  }

  you(that, x,y, r) {
    // Lil'U
    entityCirc(that, x, y, r, 'green')
  }

  testMap(that, loc, size) {
    entityRect(that, loc[0], loc[1], size[0], size[1], 'white')
  }
}


