/**
 * @Author: Alec Hale-Pletka <alechp>
 * @Date:   2018-01-24T16:36:38-08:00
 * @Email:  alec@bubblegum.academy
 * @Last modified by:   alechp
 * @Last modified time: 2018-01-25T11:33:11-08:00
 */

test("interpolate() works", () => {
  let { interpolate } = require("../src/content.js");
  let template = require("../templates/sample.template.js");
  let vars = { component: "FooBar" };

  interpolate(template, vars);
});
