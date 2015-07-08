/* 
Tests for FakeCookie. 
Invoke npm run test
*/
var $ = require('./FakeCookie.js'),
should = require('should');

describe('Write cookies:', function() {
    it('Write 1st cookie (logTime => ISO Date String)', function() {
        $.cookie('logTime', new Date().toISOString());
        $.count.should.equal(1).and.be.a.Number;
    });
    
    it('Write 2nd cookie (counter => 5)', function() {
        $.cookie('counter', 5);
        $.count.should.equal(2);
    });
    
    it('Write 3rd cookie (name => \'Seth\')', function() {
        $.cookie('name', 'Seth');
        $.count.should.equal(3);
    });
});

describe('Read cookies:', function() {
    it('Read 2nd cookie (counter)', function() {
        console.log('counter => ' + $.cookie('counter'));
        $.cookie('counter').should.equal('5').and.be.a.String;
    });
    
    it('Read 1st cookie (logTime)', function() {
        console.log('logTime => ' + $.cookie('logTime'));
        $.cookie('logTime').should.be.a.String;
    });
    
    it('Read 3rd cookie (name)', function() {
        console.log('name => ' + $.cookie('name'));
        $.cookie('name').should.equal('Seth').and.be.a.String;
    });
    
    it('Get all cookies (names & values)', function() {
        console.log($.getCookies());
        $.getCookies().should.be.an.Array;
    });
});

describe('Overwrite & remove cookies:', function() {
    it('Overwrite 3rd cookie (name => \'Jessica\')', function() {
        $.cookie('name', 'Jessica');
        console.log('name => ' + $.cookie('name'));
        $.cookie('name').should.equal('Jessica').and.be.a.String;
    });
    
    it('Remove 2nd cookie (counter)', function() {
        $.removeCookie('counter');
        $.count.should.equal(2);
    });
    
    it('Clear all remaining cookies (name & logTime)', function() {
        $.clearCookies();
        $.count.should.equal(0);
    });
});
