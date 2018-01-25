/**
 * @Author: Alec Hale-Pletka <alechp>
 * @Date:   2018-01-24T16:32:34-08:00
 * @Email:  alec@bubblegum.academy
 * @Last modified by:   alechp
 * @Last modified time: 2018-01-24T16:39:32-08:00
 */
const log = console.log;
const path = require("path");
const chalk = require("chalk");
const { fluent } = require("./helpers.js");

function Content(template) {
  this.template = template;
}

Content.prototype.tester = fluent(function() {
  log(this.template);
});

Content.prototype.tester2 = fluent(function() {
  log(this.template);
});

module.exports = Content;
