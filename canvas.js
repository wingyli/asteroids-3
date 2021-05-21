// canvas.js file

// setup canvas
let canvas = document.getElementById('display')
canvas.width = document.body.clientWidth
canvas.height = document.body.clientHeight
let ctx = canvas.getContext('2d')

// loading images so we can draw them later
function loadSprite(url) {
  // https://developer.mozilla.org/en-US/docs/Web/API/HTMLImageElement/Image
  let image = new Image()
  let loaded = new Promise(resolve => {
    image.onload = resolve
  })
  image.src = url
  return {
    image: image,
    loaded: loaded,
  }
}
let shipSprite = loadSprite('ship.png')
let rockSprite = loadSprite('rock.png')

// draw helpers
function erase() {
  ctx.fillStyle = 'black'
  ctx.fillRect(0, 0, canvas.width, canvas.height)
}

// Discussion:
// - How to fix laser?
//   - we can use the angle of the ship to determine the dx and dy of the laser
// - How to check for rock colliding with laser?
//   - we want to remove the rock and laser when they collide
//   - comparing the x,y coordinates of rock and laser
// - How to remove rock and laser from canvas when they collide?
//   - we will remove the rock and laser that were collided from their
//     respective arrays
// - How to spawn rocks?
//   - use a counter and modulo by a certain number
//   - when counter modulo number === 0, we create a new rock object
//   - and add it to the array
// modulo operator %
// 0/3 = 0 remainder 0  ->   0%3 = 0
// 1/3 = 0 remainder 1  ->   1%3 = 1
// 2/3 = 0 remainder 2  ->   2%3 = 2
// 3/3 = 1 remainder 0  ->   3%3 = 0
// 4/3 = 1 remainder 1  ->   4%3 = 1
// 5/3 = 1 remainder 2  ->   5%3 = 2


// if (counter % number === 0) 



