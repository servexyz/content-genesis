/**
 * @Author: Alec Hale-Pletka <alechp>
 * @Date:   2018-01-24T16:32:34-08:00
 * @Email:  alec@bubblegum.academy
 * @Last modified by:   alechp
 * @Last modified time: 2018-01-25T16:58:58-08:00
 */
const log = console.log;
const path = require("path");
const chalk = require("chalk");
const empty = require("is-empty");
const { fluent } = require("./helpers.js");

/**
 * Interpolation for templating
 * @param {[string]} template  [multiline template string generated by github.com/sindresorhus/multiline]
 * @param {[object]} variables [variables being interpolated, eg. {foo: 'bar'}]
 */
let template = multiline => {
  //sanitize
};

let interpolate = template => {
  let sanitized = xyz; //
  return variables => {
    sanitized(xyz);
    return interpolated;
  }
}

// const interpolate = template => {
  // let sanitized = t
    // .replace(/\$\{([\s]*[^;\s\{]+[\s]*)\}/g, function(_, match) {
      // return `\$\{map.${match.trim()}\}`;
    // })
    Afterwards, replace anything that's not ${map.expressions}' (etc) with a blank string.
    // .replace(/(\$\{(?!map\.)[^}]+\})/g, "");
//
  // return variables => {
    // return sanitized(variables);
    // return;
  // };
// };
