module.exports = {
  canvas: 0,
  context: 0,

  entities: 0,

  keyMap: {
    87: 'up',
    83: 'down',
    65: 'left',
    68: 'right'
  },

  locked: true,
  fog: new Image(),

  // look at later propogating
  maps: {
    img: new Image(),
    loc: [0,0],
    size: [1920,1080]
  },

  move: {
    up: false,
    down: false,
    left: false,
    right: false
  },

  player: {
    weapon: 'fists',
    health: 100,
    level: 1,
    xp: 0
  },

  speed: 5,

  youEntity: {
    x: 0,
    y: 0,
    r: 10
  }
}