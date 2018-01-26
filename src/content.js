/**
 * @Author: Alec Hale-Pletka <alechp>
 * @Date:   2018-01-24T16:32:34-08:00
 * @Email:  alec@bubblegum.academy
 * @Last modified by:   alechp
 * @Last modified time: 2018-01-26T14:24:30-08:00
 */
const log = console.log;
const path = require("path");
const chalk = require("chalk");
const prettier = require("prettier");
//regex shoutout to stackoverflow
let sanitize = multiline => {
  let replaceMe = multiline
    // Replace ${expressions} (etc) with ${map.expressions}.
    .replace(/\$\{([\s]*[^;\s\{]+[\s]*)\}/g, function(_, match) {
      return `\$\{map.${match.trim()}\}`;
    })
    // Afterwards, replace anything that's not ${map.expressions}' (etc) with a blank string.
    .replace(/(\$\{(?!map\.)[^}]+\})/g, "");

  return new Function("map", `return \`${replaceMe}\``);
};

let interpolate = (templateStringGeneratorFunction, variables) => {
  let uglyInterpolated = templateStringGeneratorFunction(variables);
  return prettier.format(uglyInterpolated);
};

function template(path, variables) {
  let sanitizedTemplate = sanitize(path);
  return interpolate(sanitizedTemplate, variables);
}

module.exports = {
  sanitize,
  interpolate,
  template
};
