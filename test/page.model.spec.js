const expect = require('chai').expect;
const should = require('chai').should;
const spies = require('chai-spies');
const chai = require('chai');
const Page = require('../models').Page
const db = require('../models').db;
chai.use(spies);

describe('Page model', function () {
  beforeEach(function(){
  	db.sync({force: true})
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
    describe('findByTag', function () {
      it('gets pages with the search tag');
      it('does not get pages without the search tag');
    });
  });

  describe('Instance methods', function () {
    describe('findSimilar', function () {
      it('never gets itself');
      it('gets other pages with any common tags');
      it('does not get other pages without any common tags');
    });
  });

  describe('Validations', function () {
    it('errors without title');
    it('errors without content');
    it('errors given an invalid status');
  });

  describe('Hooks', function () {
    it('it sets urlTitle based on title before validating');
  });

});
