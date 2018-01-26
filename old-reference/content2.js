/**
 * @Author: Alec Hale-Pletka <alechp>
 * @Date:   2018-01-25T16:19:08-08:00
 * @Email:  alec@bubblegum.academy
 * @Last modified by:   alechp
 * @Last modified time: 2018-01-25T16:33:47-08:00
 */
function Content(template, variables) {
  if (empty(template) || empty(variables)) {
    throw new Error("Content requires both template and variables");
  } else {
    this.template = template;
    this.variables = variables;
  }
}

Content.prototype.interpolateVariables = fluent(function() {
let t = this.template;
let sanitized = t
.replace(/\$\{([\s]*[^;\s\{]+[\s]*)\}/g, function(_, match) {
return `\$\{map.${match.trim()}\}`;
})
Afterwards, replace anything that's not ${map.expressions}' (etc) with a blank string.
.replace(/(\$\{(?!map\.)[^}]+\})/g, "");

return Function("map", `return \`${sanitized}\``); // whats with backticks yo ?
});

Content.prototype.interpolate = fluent(function() {
  let t = this.template;
  let v = this.variables;

  function generateTemplate() {}
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
// module.exports = {
  // interpolate
// };
