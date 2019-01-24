'use strict';

var processInclude = require('base/util');

$(document).ready(function () {
  console.log('hello');
  processInclude(require('base/product/quickView'));
});
