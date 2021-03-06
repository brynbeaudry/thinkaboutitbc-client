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
    // AMD. Register as an anonymous module.
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.ThinkAboutItBc) {
      root.ThinkAboutItBc = {};
    }
    root.ThinkAboutItBc.ApplicationUser = factory(root.ThinkAboutItBc.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The ApplicationUser model module.
   * @module model/ApplicationUser
   * @version v1
   */

  /**
   * Constructs a new <code>ApplicationUser</code>.
   * @alias module:model/ApplicationUser
   * @class
   */
  var exports = function() {
    var _this = this;











  };

  /**
   * Constructs a <code>ApplicationUser</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ApplicationUser} obj Optional instance to populate.
   * @return {module:model/ApplicationUser} The populated <code>ApplicationUser</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('userName')) {
        obj['userName'] = ApiClient.convertToType(data['userName'], 'String');
      }
      if (data.hasOwnProperty('firstName')) {
        obj['firstName'] = ApiClient.convertToType(data['firstName'], 'String');
      }
      if (data.hasOwnProperty('lastName')) {
        obj['lastName'] = ApiClient.convertToType(data['lastName'], 'String');
      }
      if (data.hasOwnProperty('fullName')) {
        obj['fullName'] = ApiClient.convertToType(data['fullName'], 'String');
      }
      if (data.hasOwnProperty('email')) {
        obj['email'] = ApiClient.convertToType(data['email'], 'String');
      }
      if (data.hasOwnProperty('providerName')) {
        obj['providerName'] = ApiClient.convertToType(data['providerName'], 'String');
      }
      if (data.hasOwnProperty('providerId')) {
        obj['providerId'] = ApiClient.convertToType(data['providerId'], 'String');
      }
      if (data.hasOwnProperty('pictureUrl')) {
        obj['pictureUrl'] = ApiClient.convertToType(data['pictureUrl'], 'String');
      }
      if (data.hasOwnProperty('bio')) {
        obj['bio'] = ApiClient.convertToType(data['bio'], 'String');
      }
      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {String} userName
   */
  exports.prototype['userName'] = undefined;
  /**
   * @member {String} firstName
   */
  exports.prototype['firstName'] = undefined;
  /**
   * @member {String} lastName
   */
  exports.prototype['lastName'] = undefined;
  /**
   * @member {String} fullName
   */
  exports.prototype['fullName'] = undefined;
  /**
   * @member {String} email
   */
  exports.prototype['email'] = undefined;
  /**
   * @member {String} providerName
   */
  exports.prototype['providerName'] = undefined;
  /**
   * @member {String} providerId
   */
  exports.prototype['providerId'] = undefined;
  /**
   * @member {String} pictureUrl
   */
  exports.prototype['pictureUrl'] = undefined;
  /**
   * @member {String} bio
   */
  exports.prototype['bio'] = undefined;
  /**
   * @member {String} id
   */
  exports.prototype['id'] = undefined;



  return exports;
}));


