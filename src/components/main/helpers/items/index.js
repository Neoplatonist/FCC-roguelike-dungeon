import { rand } from '../utils' 

const initItem = {
  color: 'green',
  damage: 0,
  locX: 0,
  locY: 0,
  type: 'weapon'
}

const itemList = { 
  health: {
    min: 15,
    max: 75
  },
  weapons: [
    [
      { name: 'fists',          min: 1,   max: 3 }
    ],
    [
      { name: 'brass knuckles', min: 2,   max: 5 },
      { name: 'pen knife',      min: 3,   max: 6 }
    ],
    [
      { name: 'hair pin',       min: 5,   max: 8 },
      { name: 'dagger',         min: 6,   max: 9 }
    ],
    [
      { name: 'baseball bat',   min: 9,   max: 13 },
      { name: 'short sword',    min: 10,  max: 14 }
    ],
    [
      { name: 'hammer',         min: 14,   max: 19 },
      { name: 'rusted sword',   min: 15,   max: 20 }
    ],
    [
      { name: 'samurai sword',  min: 20,  max: 26 },
      { name: 'halberd',        min: 21,  max: 27 }
    ]
  ]
}

/**
 * 
 * 
 * @export
 * @class Items
 * @method createHealth
 *    @returns {object} item
 * @method createWeapon
 *    @param {int} level
 *    @returns {object} item
**/

export default class Items {
  createHealth() {
    let item = { ...initItem }
    item.damage = rand(itemList.health.min, itemList.health.max)
    item.type = 'health'
    return item
  }

  createWeapon(level) {
    let item = { ...initItem }
    let random = rand(0,100)
    let lvl = 0
    if (random < 15 || random > 85) {
      lvl = 1
    }

    item.color = 'orange'
    item.damage = rand(
      itemList.weapons[level][lvl].min, 
      itemList.weapons[level][lvl].max
    )

    item.name = itemList.weapons[level][lvl].name

    return item
  }

  startWeapon() {
    let item = { ...initItem }

    item.color = 'orange'
    item.damage = rand(
      itemList.weapons[0][0].min, 
      itemList.weapons[0][0].max
    )

    item.name = itemList.weapons[0][0].name

    return item
  }
}












// const itemList = {
//   health: {
//     color: 'green',
//     min: 15,
//     max: 75
//   },
//   weapons: [
//     { lvl: 0, name: 'fists',          min: 1,   max: 3 },
//     { lvl: 1, name: 'brass knuckles', min: 2,   max: 5 },
//     { lvl: 1, name: 'pen knife',      min: 3,   max: 6 },
//     { lvl: 2, name: 'hair pin',       min: 5,   max: 8 },
//     { lvl: 2, name: 'dagger',         min: 6,   max: 9 },
//     { lvl: 3, name: 'baseball bat',   min: 8,   max: 12 },
//     { lvl: 3, name: 'short sword',    min: 9,   max: 13 },
//     { lvl: 4, name: 'hammer',         min: 8,   max: 12 },
//     { lvl: 4, name: 'rusted sword',   min: 9,   max: 13 },
//     { lvl: 5, name: 'samurai sword',  min: 15,  max: 20 },
//     { lvl: 5, name: 'halberd',        min: 17,  max: 22 }
//   ]
// }