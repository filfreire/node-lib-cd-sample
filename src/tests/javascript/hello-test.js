var chai = require('chai');
var expect = chai.expect;
var hello = require('../../main/javascript/hello.js');

describe('Hello', function(){
  it('greets you with a warm message when being called', function(){
    expect(hello()).to.equal("Hello World!");
  });

  it('greets you with your name if you dare introducing yourself', function(){
    expect(hello("John Doe")).to.equal("Hello John Doe!");
  });
});
