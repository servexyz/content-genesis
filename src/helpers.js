/**
 * @Author: Alec Hale-Pletka <alechp>
 * @Date:   2018-01-24T16:33:43-08:00
 * @Email:  alec@bubblegum.academy
 * @Last modified by:   alechp
 * @Last modified time: 2018-01-24T16:33:55-08:00
 */

function fluent(fn) {
  return function(...args) {
    fn.apply(this, args);
    return this;
  };
}

module.exports = {
  fluent
};
