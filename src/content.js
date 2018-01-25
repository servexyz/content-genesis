/**
 * @Author: Alec Hale-Pletka <alechp>
 * @Date:   2018-01-24T16:32:34-08:00
 * @Email:  alec@bubblegum.academy
 * @Last modified by:   alechp
 * @Last modified time: 2018-01-25T11:33:09-08:00
 */
const log = console.log;
const path = require("path");
const chalk = require("chalk");
const { fluent } = require("./helpers.js");

function Content(template, variables) {
  this.template = template;
  this.variables = variables;
}

Content.prototype.interpolate = fluent(function() {
  let temp = templateStringGenerator(this.template);
  log(temp(this.variables));
});

Content.prototype.templateStringGenerator = fluent(function() {
  /*


  var kingMaker = generateTemplateString('${name} is king!');

  console.log(kingMaker({name: 'Bryan'}));
  // Logs 'Bryan is king!' to the console.

  */
  var cache = {};

  function generateTemplate() {
    var fn = cache[this.template];
    log(`This inside generateTemplate: ${chalk.yellow(this)}`);
    if (!fn) {
      // Replace ${expressions} (etc) with ${map.expressions}.

      var sanitized = this.template
        .replace(/\$\{([\s]*[^;\s\{]+[\s]*)\}/g, function(_, match) {
          return `\$\{map.${match.trim()}\}`;
        })
        // Afterwards, replace anything that's not ${map.expressions}' (etc) with a blank string.
        .replace(/(\$\{(?!map\.)[^}]+\})/g, "");

      log(`This inside generateTemplate if block: ${chalk.yellow(this)}`);
      fn = Function("map", `return \`${sanitized}\``);
    }

    return fn;
  }

  return generateTemplate; // returns reference, doesn't invoke
});

function interpolate(template) {
  const c = new Content(template);
  c.templateStringGenerator().interpolate();
}
module.exports = {
  interpolate
};
