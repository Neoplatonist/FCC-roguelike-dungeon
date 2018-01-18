module.exports = {
  canvas: 0,
  context: 0,

  entities: 0,
  img: new Image(),

  keyMap: {
    87: 'up',
    83: 'down',
    65: 'left',
    68: 'right'
  },

  locked: true,

  // look at later propogating
  map: {
    loc: [0,0],
    size: [1920,1080]
  },

  move: {
    up: false,
    down: false,
    left: false,
    right: false
  },

  speed: 5,

  youEntity: {
    x: 0,
    y: 0,
    r: 10
  }
}