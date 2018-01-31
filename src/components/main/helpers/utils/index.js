
// Draws Rectangles
export const entityRect = function (context, x,y, width,height, color) {
  context.fillStyle = color
  context.fillRect(x,y, width,height)
}

// Draws Circles
export const entityCirc = function(context, x,y, radius, color) {
  context.fillStyle = color
  context.beginPath()
  context.arc(x,y, radius, 0,Math.PI*2, true)
  context.fill()
}

export const checkBound = function(data) {
  // white = move
  if (
    data[0] === 255 &&
    data[1] === 255 &&
    data[2] === 255 &&
    data[3] === 255
  ) {
    return true
  }

  return false
}

export const rand = function(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min)
}