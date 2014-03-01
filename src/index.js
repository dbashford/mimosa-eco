"use strict";

var config = require( "./config" )
  , getExtensions = function ( mimosaConfig ) {
    return mimosaConfig.eco.extensions;
  };

var prefix = function ( config ) {
  if ( config.template.wrapType === "amd" ) {
    return "define(function (){ var templates = {};\n";
  }

  return "var templates = {};\n";
};

var suffix = function ( config ) {
  if ( config.template.wrapType === "amd" ) {
    return "return templates; });";
  } else {
    if ( config.template.wrapType === "common" ) {
      return "\nmodule.exports = templates;";
    }
  }

  return "";
};

var compile = function ( mimosaConfig, file, cb ) {
  var error, output;

  try {
    output = mimosaConfig.eco.lib.precompile( file.inputFileText );
  } catch (err) {
    error = err;
  }

  cb( error, output );
};

module.exports = {
  name: "eco",
  compilerType: "template",
  compile: compile,
  suffix: suffix,
  prefix: prefix,
  extensions: getExtensions,
  defaults: config.defaults,
  placeholder: config.placeholder,
  validate: config.validate
};
