const expect = require('chai').expect;
const should = require('chai').should;
const spies = require('chai-spies');
const chai = require('chai');
chai.use(spies);

// describe('A test category', function () {
//   describe('A subcategory', function () {
//     it('tests something');
//     it('tests another aspect of the same thing');
//   });
//   describe('A different subcategory');
// });
// describe('A different category');

describe('Page model', function () {

  describe('Virtuals', function () {
    describe('route', function () {
      it('returns the url_name prepended by "/wiki/"');
    });
    describe('renderedContent', function () {
      it('converts the markdown-formatted content into HTML');
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
