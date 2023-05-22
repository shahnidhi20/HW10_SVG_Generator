var validateColor = require("validate-color").default;

const questions = [
  {
    type: "list",
    message: "What shape you want the SVG to be?",
    name: "svgShape",
    choices: ["Triangle", "Square", "Circle"],
  },
  {
    type: "input",
    message:
      "Enter the 3 characters of the text for which you want it in logo: ",
    name: "svgText",
    validate: (answer) => {
      if (answer.length > 3) {
        return console.log(
          "\n Text must be three characters or less! Please try again"
        );
      }
      return true;
    },
  },
  {
    type: "input",
    message: "Enter the color of the text: ",
    name: "svgTextColor",
    validate: (answer) => {
      const isValid = validateColor(answer) ? true : false;
      if (!isValid) {
        return console.log(
          "\n Invalid Text Color! Please input the valid color"
        );
      }
      return true;
    },
  },
  {
    type: "input",
    message: "Enter the color of the shape: ",
    name: "svgShapeColor",
    validate: (answer) => {
      const isValid = validateColor(answer) ? true : false;
      if (!isValid) {
        return console.log(
          "\n Invalid Shape Color! Please input the valid color"
        );
      }
      return true;
    },
  },
];

module.exports = questions;
