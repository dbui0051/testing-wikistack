const expect = require('chai').expect;
const should = require('chai').should;
const spies = require('chai-spies');
const chai = require('chai');
const Page = require('../models').Page
const db = require('../models').db;
chai.should();
chai.use(require('chai-things'));
chai.use(spies);

describe('Page model', function () {
  beforeEach(function(){
  	return db.sync({force: true})
  })

  describe('Virtuals', function () {

  var page;
	beforeEach(function () {
	  page = Page.build({title: 'hello world', content: 'some content'})
	});

    describe('route', function () {
      it('returns the url_name prepended by "/wiki/"', function(){
      	page.urlTitle = 'hello_world'
      	expect(page.route).to.equal('/wiki/hello_world')
      });
    });

    describe('renderedContent', function () {
      xit('converts the markdown-formatted content into HTML');
      //expect(page.renderedContent).to.equal();
    });
  });

  describe('Class methods', function () {
    beforeEach(function (done) {
        Page.create({
         title: 'foo',
         content: 'bar',
         tags: ['foo', 'bar']
       })
      .then(function () {
        done();
      })
      .catch(done);
      });

    describe('findByTag', function () {

      it('gets pages with the search tag', function(done){
        Page.findByTag('bar')
        .then(function(pages){
          expect(pages).to.have.lengthOf(1);
          done();
        })
        .catch(done);
      });

      it('does not get pages without the search tag', function(done){
         Page.findByTag('falfal')
         .then(function(pages){
           expect(pages).to.have.lengthOf(0);
           done();
         })
         .catch(done);

      });
    });
  });

  describe('Instance methods', function () {
    var page1, page2;

    beforeEach(function () {
      return Promise.all([
        Page.create({
          title: 'foo',
          content: 'bar',
          tags: ['foo', 'bar']
        }),
        Page.create({
          title: 'hello',
          content: 'hello world',
          tags: ['foo', 'hello']
        }),
        Page.create({
          title: 'goodbye',
          content: 'goodbye world',
          tags: ['good', 'bye']
        })
        ])
      .then(function(arrayOfPages){
        page1 = arrayOfPages[0];
        page2 = arrayOfPages[1];
        page3 = arrayOfPages[2]
      })
    });

    describe('findSimilar', function () {

      it('never gets itself', function(done){
        page1.findSimilar()
        .then(function(pages){
          expect(pages).to.have.lengthOf(1);
          done();
        })
        .catch(done)
      });

      it('gets other pages with any common tags', function(done){
        page2.findSimilar()
        .then(function(pages){
          expect(pages).to.have.lengthOf(1);
          done();
        })
        .catch(done)
      });

      it('does not get other pages without any common tags', function(done){
        page3.findSimilar()
        .then(function(pages){
          expect(pages).to.have.lengthOf(0);
          done();
        })
        .catch(done)
      });
    });
  });

  describe('Validations', function () {
    var page;
    beforeEach(function () {
      page = Page.build({content: 'some content'})
    });

    it('errors without title', function(done){
      page.validate()
      .then(function(err){
        console.log(err)
        expect(err).to.exist;
        expect(err.errors).to.exist;
        expect(err.errors[0].path).to.equal('title');
        expect(err.errors[1].path).to.equal('urlTitle');
        done();
      })
    });

    xit('errors without content');
    xit('errors given an invalid status');
  });

  describe('Hooks', function () {
    it('it sets urlTitle based on title before validating');
  });

});
