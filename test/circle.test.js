const Circle = require("../lib/circle.js");

describe("Circle", () => {
  it("should return logo of shape circle", () => {
    const circle = new Circle("blue", "EKO", "white");
    const shapeCreated = circle.createShape();
    const expectedOutput = `
    <svg version="1.1"
    width="300" height="200"
    xmlns="http://www.w3.org/2000/svg">
        <circle cx="150" cy="100" r="80" fill="blue"/>
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="white">EKO</text>   
    </svg>
    `;
    expect(shapeCreated).toEqual(expectedOutput);
  });
});
