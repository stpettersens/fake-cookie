### fake-cookie
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
    import fc = require('ssp-fake-cookie')
    fc.cookie('cookie_name', 'cookie_value');
    fc.cookie('cookie_name'); // ==> 'cookie_value'
    fc.getCookies(); // ==> ['cookie_name=>cookie_value']
    fc.count; // ==> 1
    fc.removeCookie('cookie_name');
    fc.count; // ==> 0
