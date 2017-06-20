// var expect = require('chai').expect;
// var should = require('chai').should;
// var spies = require('chai-spies');
// var chai = require('chai');
// chai.use(spies);


// describe('testing example functions', function(){

// 	it('should add 2 integers', function(){
// 		var result = 2 + 2
// 		expect(result).to.equal(4)
// 	})

// 	it('setTimeOut of 1000ms', function(done){
// 		var start = new Date();
// 		setTimeout(function (){
// 			var totalTime = new Date() - start;
// 			expect(totalTime).to.closeTo(1000, 50);
// 			done();
// 		}, 1000)
// 	})

// 	it('should spy n times', function(){
// 		var arrayOfStrings = ['one', 'two', 'three'];

// 		function logThisElement(index){
// 			console.log(index)
// 		}

// 		var spyOnFunction = chai.spy(logThisElement);
// 		//spyOnFunction(arrayOfStrings)
// 		arrayOfStrings.forEach(element => spyOnFunction(element))
// 		expect(spyOnFunction).to.have.been.called.exactly(3);
// 	})

// })

