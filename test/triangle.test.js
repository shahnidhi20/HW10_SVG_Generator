const Triangle = require("../lib/triangle.js");

describe("Triangle", () => {
  it("should return logo of shape triangle", () => {
    const triangle = new Triangle("blue", "TRI", "white");
    const shapeCreated = triangle.createShape();
    const expectedOutput = `
    <svg version="1.1"
    width="300" height="200"
    xmlns="http://www.w3.org/2000/svg">
        <polygon points="100, 15 200, 200 0, 200" fill="blue"/>
        <text x="100" y="185" font-size="60" text-anchor="middle" fill="white">TRI</text>
    </svg>
    `;
    expect(shapeCreated).toEqual(expectedOutput);
  });
});
