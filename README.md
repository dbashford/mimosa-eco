mimosa-eco
===========

## Overview

This is a ECO compiler for the Mimosa build tool. This module is for use with Mimosa `2.0+`.  This replicates the functionality of the ECO compiler that was built into Mimosa before `2.0`.

For more information regarding Mimosa, see http://mimosa.io

## Usage

Add `'eco'` to your list of modules.  That's all!  Mimosa will install the module for you when you start `mimosa watch` or `mimosa build`.

## Functionality

This module will compile ECO files during `mimosa watch` and `mimosa build`.

This module utilizes all of the built-in template behavior that comes with Mimosa's basic template compiler.  See the [mimosa website](http://mimosa.io/compilers.html#mt) for more information about how templates are treated or check out the various [`template` configuration options](http://mimosa.io/configuration.html#templates).

## Default Config

```coffeescript
eco:
  lib: undefined
  extensions: ["eco"]
```

* `lib`: You may want to use this module but may not be ready to use the latest version of ECO. Using the `lib` property you can provide a specific version of ECO if the one being used by this module isn't to your liking. To provide a specific version, you must have it `npm install`ed into your project and then provide it to `lib`. For instance: `lib: require('eco')`.
* `extensions`: an array of strings, the extensions of your ECO files.