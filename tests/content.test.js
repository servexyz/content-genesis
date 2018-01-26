/**
 * @Author: Alec Hale-Pletka <alechp>
 * @Date:   2018-01-24T16:36:38-08:00
 * @Email:  alec@bubblegum.academy
 * @Last modified by:   alechp
 * @Last modified time: 2018-01-26T14:20:05-08:00
 */
const path = require("path");
const chalk = require("chalk");
const fs = require("fs-extra");
const prettier = require("prettier");
const log = console.log;

const { TEMPLATE } = require(path.join(
  __dirname,
  "../templates/sample.template.js"
));

let foo = { component: "Foo" };

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

test("sanitize and interpolate functions produce template string", () => {
  const { sanitize, interpolate } = require("../src/content.js");
  let sanitizedTemplate = sanitize(TEMPLATE);
  let fooInterpolated = interpolate(sanitizedTemplate, foo);
  log(`fooInterpolated: \n ${fooInterpolated}`);
  expect(fooInterpolated).toBe(expectedFoo);
});

test("composed template function produce template string", () => {
  const { template } = require("../src/content.js"); //template refers to the function
  let fooTemplate = template(TEMPLATE, foo); //TEMPLATE refers to the path
  expect(fooTemplate).toBe(expectedFoo);
});
