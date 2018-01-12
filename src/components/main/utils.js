
// Draws Rectangles
export const entityRect = function (that, x,y, width,height, color) {
  that.context.fillStyle = color
  that.context.fillRect(x,y, width,height)
}

// Draws Circles
export const entityCirc = function(that, x,y, radius, color) {
  that.context.fillStyle = color
  that.context.beginPath()
  that.context.arc(x,y, radius, 0,Math.PI*2, true)
  that.context.fill()
}

// export default class Map {
  
// }