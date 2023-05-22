//Base Class of the shape which has Shape color, Text and Text Color properties

class Shape {
  constructor(shapeColor, text, textColor) {
    this.shapeColor = shapeColor;
    this.text = text;
    this.textColor = textColor;
  }
}

module.exports = Shape;
