"use strict";

exports.defaults = function() {
  return {
    eco: {
      extensions: [ "eco" ],
    }
  };
};

exports.placeholder = function() {
  return "\t\n\n"+
         "  # eco:                  # config settings for the ECO compiler module\n" +
         "    # lib: undefined       # use this property to provide a specific version of ECO\n" +
         "    # extensions: [\"eco\"]   # default extensions for ECO files\n";
};

exports.validate = function( config, validators ) {
  var errors = [];

  if ( validators.ifExistsIsObject( errors, "eco config", config.eco ) ) {

    if ( !config.eco.lib ) {
      config.eco.lib = require( 'eco' );
    }

    if ( validators.isArrayOfStringsMustExist( errors, "eco.extensions", config.eco.extensions ) ) {
      if (config.eco.extensions.length === 0) {
        errors.push( "eco.extensions cannot be an empty array");
      }
    }
  }

  return errors;
};



