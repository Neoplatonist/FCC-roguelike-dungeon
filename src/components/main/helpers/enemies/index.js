import { rand } from '../utils' 

const initEnemies = {
  color: 'red',
  damage: 0,
  health: 0,
  locX: 0,
  locY: 0,
  name: 'enemy'
}

const enemiesList = [
  [],
  [
    { name: 'cave bat', min: 3, max: 5 }
  ],
  [
    { name: 'buff rat', min: 6, max: 8 }
  ],
  [
    { name: 'hairless cat', min: 10, max: 13 }
  ],
  [
    { name: 'landshark', min: 15, max: 19 }
  ],
  [
    { name: 'goboblin', min: 21, max: 26 }
  ],
]

export default class Enemies {
  constructor() {
    this.multiplier = 3
  }

  createEnemies(level) {
    let enemy = { ...initEnemies }

    enemy.name = enemiesList[level][0].name
    enemy.damage = rand(
      enemiesList[level][0].min,
      enemiesList[level][0].max
    )
    enemy.health = enemy.damage * this.multiplier

    return enemy //?
  }

  createBoss() {
    let enemy = { ...initEnemies }

    enemy.name = 'boss person'
    enemy.damage = rand(26, 30)
    enemy.health = enemy.damage * this.multiplier

    return enemy //?
  }
}