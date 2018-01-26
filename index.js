/**
 * @Author: Alec Hale-Pletka <alechp>
 * @Date:   2018-01-24T16:16:02-08:00
 * @Email:  alec@bubblegum.academy
 * @Last modified by:   alechp
 * @Last modified time: 2018-01-26T14:42:58-08:00
 */

const { sanitize, interpolate } = require("./src/content.js");

function template(path, variables) {
  let sanitizedTemplate = sanitize(path);
  return interpolate(sanitizedTemplate, variables);
}
module.exports = { template };
