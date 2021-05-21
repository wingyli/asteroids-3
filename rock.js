// rock.js file

class Rock {
  constructor() {
    this.sprite = rockSprite.image
    this.x = Math.random() * canvas.width
    this.y = Math.random() * canvas.height
    this.dx = (Math.random() * 6) - 3
    this.dy = (Math.random() * 6) - 3
    let sizes = [50, 80, 100, 120]
    let size_index = Math.floor(Math.random() * sizes.length)
    this.size = sizes[size_index]
    this.hit = false
  }
  checkForHit(laser) {
    let x = this.x - laser.x
    let y = this.y - laser.y
    let dist = Math.sqrt(x*x + y*y)

    let radius = this.size / 2

    let areColliding = dist <= radius
    if (areColliding) {
      this.hit = true
      laser.hit = true
    }
  }
  step() {
    this.x += this.dx
    this.y += this.dy

    if (this.x < 0) {
      this.x = canvas.width
    } else if (this.x > canvas.width) {
      this.x = 0
    }
    if (this.y < 0) {
      this.y = canvas.height
    } else if (this.y > canvas.height) {
      this.y = 0
    }
  }
  draw() {
    ctx.drawImage(
      this.sprite,
      this.x - this.size/2,
      this.y - this.size/2,
      this.size,
      this.size
    )
  }
}