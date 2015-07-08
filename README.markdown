### fake-cookie
[![Build status](https://ci.appveyor.com/api/projects/status/github/stpettersens/node-fake-cookie?branch=master&svg=true)](https://ci.appveyor.com/project/stpettersens/node-fake-cookie)
[![Build Status](https://travis-ci.org/stpettersens/node-fake-cookie.svg?branch=master)](https://travis-ci.org/stpettersens/node-fake-cookie) [![Code Climate](https://codeclimate.com/github/stpettersens/node-fake-cookie/badges/gpa.svg)](https://codeclimate.com/github/stpettersens/node-fake-cookie/code) [![Development Dependency Status](https://david-dm.org/stpettersens/node-fake-cookie/dev-status.png?theme=shields.io)](https://david-dm.org/stpettersens/node-fake-cookie#info=devDependencies) ![npm version](https://badge.fury.io/js/node-fake-cookie.svg)](http://npmjs.org/package/node-fake-cookie)

Node.js module to simulate reading and writing browser cookie.

Use from JavaScript:

    var fc = require('ssp-fake-cookie');
    fc.cookie('cookie_name', 'cookie_value');
    fc.cookie('cookie_name'); // ==> 'cookie_value'
    fc.getCookies(); // ==> ['cookie_name=>cookie_value']
    fc.count; // ==> 1
    fc.removeCookie('cookie_name'); 
    fc.count; // ==> 0
    
Use from [TypeScript](http://www.typescriptlang.org):

    /// <reference path="typings/ssp-fake-cookie.d.ts" />
    import fc = require('ssp-fake-cookie');
    fc.cookie('cookie_name', 'cookie_value');
    fc.cookie('cookie_name'); // ==> 'cookie_value'
    fc.getCookies(); // ==> ['cookie_name=>cookie_value']
    fc.count; // ==> 1
    fc.removeCookie('cookie_name');
    fc.count; // ==> 0
