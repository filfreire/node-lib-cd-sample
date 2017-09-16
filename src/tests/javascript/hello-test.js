var chai = require('chai');
var expect = chai.expect;
var app = require('../../main/javascript/hello.js');

describe('Hello', function(){
  it('greets you with a warm message when being called', function(){
    expect(app.hello()).to.equal("Hello World!");
  });

  it('greets you with your name if you dare introducing yourself', function(){
    expect(app.hello("John Doe")).to.equal("Hello John Doe!");
  });
});

describe('WhereAmI', function(){
  it('lets you know your location', function(){
    expect(app.whereAmI()).to.equal("You are at PortoTechHub 2017");
  })
})
