const Square = require("../lib/square.js");

describe("Square", () => {
  it("should return logo in the shape of SQUARE", () => {
    const square = new Square("blue", "SQU", "white");
    const shapeCreated = square.createShape();
    const expectedOutput = `
    <svg version="1.1"
    width="300" height="200"
    xmlns="http://www.w3.org/2000/svg">
        <rect width="200" height="200" fill="blue"/>
        <text x="100" y="125" font-size="60" text-anchor="middle" fill="white">SQU</text>
    </svg>
    `;

    expect(shapeCreated).toEqual(expectedOutput);
  });
});
