
// Draws Rectangles
export const entityRect = (context, x,y, width,height, color) => {
  context.fillStyle = color
  context.fillRect(x,y, width,height)
}

// Draws Circles
export const entityCirc = (context, x,y, radius, color) => {
  context.fillStyle = color
  context.beginPath()
  context.arc(x,y, radius, 0,Math.PI*2, true)
  context.fill()
}

export const checkBound = (data) => {
  let move = true

  for (let i = 0; i < data.length; i += 4) {
    if (
      data[i] !== 255 ||
      data[i + 1] !== 255 ||
      data[i + 2] !== 255 ||
      data[i + 3] !== 255
    ) {
      move = false
    }
  }

  return move
}

export const compose = (...fns) => x => fns.reduce((y, f) => f(y), x)

export const withConstructor = constructor => o => {
  const proto = Object.assign({},
    Object.getPrototypeOf(o),
    { constructor }
  )
  
  return Object.assign(Object.create(proto), o)
}

export const rand = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min)
}