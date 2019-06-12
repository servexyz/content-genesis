/**
 * @Author: Alec Hale-Pletka <alechp>
 * @Date:   2018-01-24T16:36:38-08:00
 * @Email:  alec@bubblegum.academy
 * @Last modified by:   alechp
 * @Last modified time: 2018-01-27T17:02:48-08:00
 */
const path = require("path");
const chalk = require("chalk");
const prettier = require("prettier");
const log = console.log;

const templatePath = path.join(__dirname, "../templates/sample.template.js");

let foo = { component: "Foo" };
import test from "ava";

//TODO: Consider reading this from templates/sample.template.js and running it through prettier instead
let expectedFooUgly = `
 import React from \"react\";
 import PropTypes from "prop-types";
 export default class Foo extends React.Component {
   static defaultProps = {
     place: "holder"
   };
   static propTypes = {
     place: React.PropTypes.string.isRequired
   };
   state = {
     foo: "bar"
   };
   constructor(props) {
     super(props);
   }
   render() {
     return <div>{this.state.foo}</div>;
   }
 }
`;

let expectedFoo = prettier.format(expectedFooUgly);

//TODO: Realized that the issue is it's not looking for a path, it's looking for multiline
test("sanitize and interpolate functions produce template string", t => {
  const { sanitize, interpolate } = require("../src/content.js");
  log(`template: ${chalk.blue(templatePath)}`);
  let sanitizedTemplate = sanitize(templatePath);
  let fooInterpolated = interpolate(sanitizedTemplate, foo);
  t.is(fooInterpolated, expectedFoo);
});

test("composed template function produce template string", t => {
  const { template } = require("../index.js"); //template refers to the function
  let fooTemplate = template(templatePath, foo); //templatePath refers to the path
  log(`fooTemplate: \n ${chalk.green(fooTemplate)}`);
  chalk.yellow("///////////////////////////////////////////////////");
  log("fooTemplate \n", fooTemplate);
  t.is(fooTemplate, expectedFoo);
});
