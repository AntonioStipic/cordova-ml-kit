
var exec = require('cordova/exec');
var PLUGIN_NAME = 'MlKitPlugin';

module.exports = {
  getText: function (img, options, success, error) {
    exec(success, error, PLUGIN_NAME, 'getText', [img]);
  },
  getTextCloud: function (img, options, success, error) {
    options = options || {};
    var language = options.language || '';
    exec(success, error, PLUGIN_NAME, 'getTextCloud', [img, language]);
  }, getLabel: function (img, options, success, error) {
    exec(success, error, PLUGIN_NAME, 'getLabel', [img]);
  }, getLabelCloud: function (img, options, success, error) {
    exec(success, error, PLUGIN_NAME, 'getLabelCloud', [img]);
  },
};
