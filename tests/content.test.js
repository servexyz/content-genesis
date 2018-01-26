/**
 * @Author: Alec Hale-Pletka <alechp>
 * @Date:   2018-01-24T16:36:38-08:00
 * @Email:  alec@bubblegum.academy
 * @Last modified by:   alechp
 * @Last modified time: 2018-01-26T11:06:17-08:00
 */

const log = console.log;
// test("interpolate() works", () => {
//   let { interpolate } = require("../src/content.js");
//   const { TEMPLATE } = require("../templates/sample.template.js");
//   let vars = { component: "FooBar" };
//   log(TEMPLATE);
//   interpolate(TEMPLATE, vars);
// });
test("abc", () => {
  const { abc, inted, inted2 } = require("../src/content.js");
  log(abc);
  log(`abc: ${abc}`);
  log(`inted: ${inted}`);
  log(`inted: ${inted2}`);
});
