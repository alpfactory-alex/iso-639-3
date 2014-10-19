'use strict';

/**
 * Dependencies.
 */

var fs,
    iso6393;

fs = require('fs');
iso6393 = require('../');

/**
 * Write.
 */

fs.writeFileSync('Supported-codes.md',
    'Supported Codes\n' +
    '=================\n' +
    '\n' +

    iso6393.keys().map(function (code) {
        return '- ' + code + ': ' + iso6393.get(code).name;
    }).join(';\n') +

    '.\n'
);
