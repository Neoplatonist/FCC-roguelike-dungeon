import { rand } from '../utils' 

const initEnemies = {
  color: 'red',
  damage: 0,
  health: 0,
  locX: 0,
  locY: 0,
  dims: 15,
  name: 'enemy',
  xp: 0
}

const enemiesList = [
  [],
  [
    { name: 'cave bat',     dmgMin: 3,  dmgMax: 5,  xpMin: 10, xpMax: 25 }
  ],
  [
    { name: 'buff rat',     dmgMin: 6,  dmgMax: 8,  xpMin: 30, xpMax: 65 }
  ],
  [
    { name: 'hairless cat', dmgMin: 10, dmgMax: 13, xpMin: 70, xpMax: 100 }
  ],
  [
    { name: 'landshark',    dmgMin: 15, dmgMax: 19, xpMin: 110, xpMax: 180 }
  ],
  [
    { name: 'goboblin',     dmgMin: 21, dmgMax: 26, xpMin: 190, xpMax: 230 }
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
      enemiesList[level][0].dmgMin,
      enemiesList[level][0].dmgMax
    )
    enemy.xp = rand(
      enemiesList[level][0].xpMin,
      enemiesList[level][0].xpMax
    )
    enemy.health = enemy.damage * this.multiplier

    return enemy //?
  }

  createBoss() {
    let enemy = { ...initEnemies }

    enemy.name = 'boss person'
    enemy.damage = rand(26, 30)
    enemy.health = enemy.damage * this.multiplier
    enemy.dims = 30

    console.log(enemy)

    return enemy //?
  }
}