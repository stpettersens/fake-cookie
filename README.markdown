### fake-cookie
[![Build Status](https://travis-ci.org/stpettersens/node-fake-cookie.svg?branch=master)](https://travis-ci.org/stpettersens/node-fake-cookie) [![npm version](https://badge.fury.io/js/fake-cookie.svg)](http://npmjs.org/package/fake-cookie) [![Development Dependency Status](https://david-dm.org/stpettersens/node-fake-cookie/dev-status.png?theme=shields.io)](https://david-dm.org/stpettersens/node-fake-cookie#info=devDependencies) 

Node.js module to simulate reading and writing browser cookie.

Use from JavaScript:

```js
var fc = require('fake-cookie');
fc.cookie('cookie_name', 'cookie_value');
fc.cookie('cookie_name'); // ==> 'cookie_value'
fc.getCookies(); // ==> ['cookie_name=>cookie_value']
fc.count; // ==> 1
fc.removeCookie('cookie_name'); 
fc.count; // ==> 0
```
    
Use from [TypeScript](http://www.typescriptlang.org):

```ts
/// <reference path="typings/fake-cookie.d.ts" />
import fc = require('fake-cookie');
fc.cookie('cookie_name', 'cookie_value');
fc.cookie('cookie_name'); // ==> 'cookie_value'
fc.getCookies(); // ==> ['cookie_name=>cookie_value']
fc.count; // ==> 1
fc.removeCookie('cookie_name');
fc.count; // ==> 0
```
