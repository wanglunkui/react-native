/**
 * Copyright (c) 2015-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */
'use strict';

require('./setupNodePolyfills');

var _only = [];

function registerOnly(onlyList) {
  require('babel-register')(config(onlyList));
}

function config(onlyList) {
  _only = _only.concat(onlyList);
  return {
    presets: ['es2015-node'],
    plugins: [
      'transform-flow-strip-types',
      'syntax-trailing-function-commas',
      'transform-object-rest-spread',
      'transform-async-to-generator',
    ],
    only: _only,
    retainLines: true,
    sourceMaps: 'inline',
    babelrc: false,
  };
}

module.exports = exports = registerOnly;
exports.config = config;
