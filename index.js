const inquirer = require("inquirer");
const questions = require("./lib/questions.js");
const fs = require("fs");
const svgShapeCreate = require("./lib/createShape.js");

function createSVGLogo(response) {
  const svg = svgShapeCreate(response);
  let fileName = "./examples/logo.svg";
  //console.log("SVG Create ", svg);
  if (response.svgShape === "Circle") {
    fileName = "./examples/logo-cir.svg";
  } else if (response.svgShape === "Square") {
    fileName = "./examples/logo-square.svg";
  } else if (response.svgShape === "Triangle") {
    fileName = "./examples/logo-tri.svg";
  }
  fs.writeFile(fileName, svg, () => console.log("Generated logo.svg"));
}

function init() {
  inquirer
    .prompt(questions)
    .then((response) => {
      console.log("ans", response);
      createSVGLogo(response);
    })
    .catch((err) => {
      console.log(err);
    });
}

init();
