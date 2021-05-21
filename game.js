// game.js file

// game state
let ship = new Ship()
let rocks = [new Rock(), new Rock(), new Rock()]
let lasers = []

let keyPressed = {}
// check for user input
window.addEventListener('keydown', event => {
  keyPressed[event.code] = true
  console.log(keyPressed)
})

window.addEventListener('keyup', event => {
  keyPressed[event.code] = false
  console.log(keyPressed)
})

// challenge: check user input to add laser
window.addEventListener('keypress', event => {
  if (event.code === 'Space') {
    let laser = ship.pewpew()
    lasers.push(laser)
  }
})

// game loop
function loop() {
  // check user input to change ship's angle and speed
  if (keyPressed['ArrowLeft'] == true) {
    ship.rotateLeft()
  }
  if (keyPressed['ArrowRight'] == true) {
    ship.rotateRight()
  }
  if (keyPressed['ArrowUp'] == true) {
    ship.thrust()
  }

  // change game state
  ship.step()
  rocks.forEach(rock => rock.step())
  lasers.forEach(laser => laser.step())
  // Note: forEach does the same thing as using a regular for loop
  // for (let i = 0; i < rocks.length; i++) {
  //   let rock = rocks[i]
  //   rock.step()
  // }

  rocks.forEach(rock => {
    lasers.forEach(laser => {
      rock.checkForHit(laser)
    })
  })
  // equvilent to using traditional nested for loops
  // for (let i = 0; i < rocks.length; i++) {
  //   let rock = rocks[i]
  //   for (let j = 0; j < lasers.length; j++) {
  //     let laser = lasers[j]
  //     rock.checkForHit(laser)
  //   }
  // }

  rocks = rocks.filter(r => r.hit === false)
  lasers = lasers.filter(l => l.hit === false)
  // equivalent to the below
  // let newLasers = []
  // for (let i = 0; i < lasers.length; i++) {
  //   let l = lasers[i]
  //   if (l.hit === false) {
  //     newLasers.push(l)
  //   }
  // }
  // lasers = newLasers

  // draw all
  erase()
  ship.draw()
  rocks.forEach(rock => rock.draw())
  lasers.forEach(laser => laser.draw())

  // trigger loop
  setTimeout(() => loop(), 1000 / 60)
}

// wait for images to load first before starting game
async function loadGame() {
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function
  await shipSprite.loaded
  await rockSprite.loaded
  loop()
}
loadGame()
