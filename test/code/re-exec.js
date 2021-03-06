'use strict';

/**
 * ```js
 * indexOf(a, b);
 * ```
 */

module.exports = function(a, b) {
  a = String(a);
  b = String(b);
  var re = new RegExp(b + '$');
  return !!re.exec(a);
};
