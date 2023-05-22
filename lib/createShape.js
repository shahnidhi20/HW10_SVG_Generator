const Circle = require("./circle.js");
const Square = require("./square.js");
const Triangle = require("./triangle.js");
function createShape(response) {
  console.log("Createshapre", response.svgShape);
  if (response.svgShape === "Circle") {
    let userShape = new Circle(
      response.svgShapeColor,
      response.svgText,
      response.svgTextColor
    );
    return userShape.createShape();
  }

  if (response.svgShape === "Square") {
    let userShape = new Square(
      response.svgShapeColor,
      response.svgText,
      response.svgTextColor
    );
    return userShape.createShape();
  }

  if (response.svgShape === "Triangle") {
    let userShape = new Triangle(
      response.svgShapeColor,
      response.svgText,
      response.svgTextColor
    );
    return userShape.createShape();
  }
}

module.exports = createShape;
