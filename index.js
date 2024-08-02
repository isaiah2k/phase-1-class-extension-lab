class Polygon {
  constructor(sides) {
    this.sides = sides
  }

  get countSides() {
    return this.sides.length
  }

  // Uses .reduce() to sum all sides of the polygon
  get perimeter() {
    return this.sides.reduce((acc, side) => acc + side, 0)
  }
}

class Triangle extends Polygon {
  // Getter method to check if the triangle is valid
  get isValid() {
    const [a, b, c] = this.sides
    return this.countSides === 3 && (a + b > c) && (a + c > b) && (b + c > a)
  }
}

class Square extends Polygon {
  get isValid() {
    const [a, b, c, d] = this.sides
    return (a === b) && (a === c) && (a === d)
  }

  get area() {
    return this.sides[0] * this.sides[0]
  }
}