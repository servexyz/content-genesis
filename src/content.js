/**
 * @Author: Alec Hale-Pletka <alechp>
 * @Date:   2018-01-24T16:32:34-08:00
 * @Email:  alec@bubblegum.academy
 * @Last modified by:   alechp
 * @Last modified time: 2018-01-27T17:03:39-08:00
 */
const log = console.log;
const path = require("path");
const chalk = require("chalk");
const prettier = require("prettier");
//regex shoutout to stackoverflow
var sanitize = templatePath => {
  const { TEMPLATE } = require(templatePath);
  let replaceMe = TEMPLATE
    // Replace ${expressions} (etc) with ${map.expressions}.
    .replace(/\$\{([\s]*[^;\s\{]+[\s]*)\}/g, function(_, match) {
      return `\$\{map.${match.trim()}\}`;
    })
    // Afterwards, replace anything that's not ${map.expressions}' (etc) with a blank string.
    .replace(/(\$\{(?!map\.)[^}]+\})/g, "");

  return new Function("map", `return \`${replaceMe}\``);
};

var interpolate = (templateStringGeneratorFunction, variables) => {
  let uglyInterpolated = templateStringGeneratorFunction(variables);
  return prettier.format(uglyInterpolated);
};

module.exports = {
  sanitize,
  interpolate
};
