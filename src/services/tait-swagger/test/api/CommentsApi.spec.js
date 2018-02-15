/**
 * Think About IT BC
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: v1
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.2.3
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.ThinkAboutItBc);
  }
}(this, function(expect, ThinkAboutItBc) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new ThinkAboutItBc.CommentsApi();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('CommentsApi', function() {
    describe('apiCommentsByIdDelete', function() {
      it('should call apiCommentsByIdDelete successfully', function(done) {
        //uncomment below and update the code to test apiCommentsByIdDelete
        //instance.apiCommentsByIdDelete(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('apiCommentsByIdGet', function() {
      it('should call apiCommentsByIdGet successfully', function(done) {
        //uncomment below and update the code to test apiCommentsByIdGet
        //instance.apiCommentsByIdGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('apiCommentsByIdPut', function() {
      it('should call apiCommentsByIdPut successfully', function(done) {
        //uncomment below and update the code to test apiCommentsByIdPut
        //instance.apiCommentsByIdPut(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('apiCommentsGet', function() {
      it('should call apiCommentsGet successfully', function(done) {
        //uncomment below and update the code to test apiCommentsGet
        //instance.apiCommentsGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('apiCommentsPost', function() {
      it('should call apiCommentsPost successfully', function(done) {
        //uncomment below and update the code to test apiCommentsPost
        //instance.apiCommentsPost(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
