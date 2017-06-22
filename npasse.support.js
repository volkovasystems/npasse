"use strict";var _symbol = require("babel-runtime/core-js/symbol");var _symbol2 = _interopRequireDefault(_symbol);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };} /*;
                                                                                                                                                                                                                	@module-license:
                                                                                                                                                                                                                		The MIT License (MIT)
                                                                                                                                                                                                                		@mit-license
                                                                                                                                                                                                                
                                                                                                                                                                                                                		Copyright (@c) 2017 Richeve Siodina Bebedor
                                                                                                                                                                                                                		@email: richeve.bebedor@gmail.com
                                                                                                                                                                                                                
                                                                                                                                                                                                                		Permission is hereby granted, free of charge, to any person obtaining a copy
                                                                                                                                                                                                                		of this software and associated documentation files (the "Software"), to deal
                                                                                                                                                                                                                		in the Software without restriction, including without limitation the rights
                                                                                                                                                                                                                		to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
                                                                                                                                                                                                                		copies of the Software, and to permit persons to whom the Software is
                                                                                                                                                                                                                		furnished to do so, subject to the following conditions:
                                                                                                                                                                                                                
                                                                                                                                                                                                                		The above copyright notice and this permission notice shall be included in all
                                                                                                                                                                                                                		copies or substantial portions of the Software.
                                                                                                                                                                                                                
                                                                                                                                                                                                                		THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
                                                                                                                                                                                                                		IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
                                                                                                                                                                                                                		FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
                                                                                                                                                                                                                		AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
                                                                                                                                                                                                                		LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
                                                                                                                                                                                                                		OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
                                                                                                                                                                                                                		SOFTWARE.
                                                                                                                                                                                                                	@end-module-license
                                                                                                                                                                                                                
                                                                                                                                                                                                                	@module-configuration:
                                                                                                                                                                                                                		{
                                                                                                                                                                                                                			"package": "npasse",
                                                                                                                                                                                                                			"path": "npasse/npasse.js",
                                                                                                                                                                                                                			"file": "npasse.js",
                                                                                                                                                                                                                			"module": "npasse",
                                                                                                                                                                                                                			"author": "Richeve S. Bebedor",
                                                                                                                                                                                                                			"eMail": "richeve.bebedor@gmail.com",
                                                                                                                                                                                                                			"contributors": [
                                                                                                                                                                                                                				"John Lenon Maghanoy <johnlenonmaghanoy@gmail.com>",
                                                                                                                                                                                                                				"Vinse Vinalon <vinsevinalon@gmail.com>"
                                                                                                                                                                                                                			],
                                                                                                                                                                                                                			"repository": "https://github.com/volkovasystems/npasse.git",
                                                                                                                                                                                                                			"test": "npasse-test.js",
                                                                                                                                                                                                                			"global": true
                                                                                                                                                                                                                		}
                                                                                                                                                                                                                	@end-module-configuration
                                                                                                                                                                                                                
                                                                                                                                                                                                                	@module-documentation:
                                                                                                                                                                                                                		Call passable callback.
                                                                                                                                                                                                                	@end-module-documentation
                                                                                                                                                                                                                
                                                                                                                                                                                                                	@include:
                                                                                                                                                                                                                		{
                                                                                                                                                                                                                			"aply": "aply",
                                                                                                                                                                                                                			"execd": "execd",
                                                                                                                                                                                                                			"falzy": "falzy",
                                                                                                                                                                                                                			"mrkd": "mrkd",
                                                                                                                                                                                                                			"protype": "protype",
                                                                                                                                                                                                                			"shft": "shft",
                                                                                                                                                                                                                			"zelf": "zelf"
                                                                                                                                                                                                                		}
                                                                                                                                                                                                                	@end-include
                                                                                                                                                                                                                */

var aply = require("aply");
var execd = require("execd");
var falzy = require("falzy");
var mrkd = require("mrkd");
var protype = require("protype");
var shft = require("shft");
var zelf = require("zelf");

var CALLED_ONCE = (0, _symbol2.default)("called-once");
var PASSABLE = (0, _symbol2.default)("passable");

var npasse = function npasse(callback, context, parameter) {
	/*;
                                                            	@meta-configuration:
                                                            		{
                                                            			"callback:required": "function",
                                                            			"context:required": "*",
                                                            			"parameter": "..."
                                                            		}
                                                            	@end-meta-configuration
                                                            */

	if (falzy(callback) ||
	!protype(callback, FUNCTION) ||
	!mrkd(CALLED_ONCE, callback, true))
	{
		throw new Error("invalid callback");
	}

	if (execd(callback)) {
		return callback;
	}

	context = zelf(context);

	parameter = shft(arguments, 2);

	if (mrkd(PASSABLE, callback, true)) {
		return aply(callback.passed, context, parameter);
	}

	return aply(callback, context, parameter);
};

module.exports = npasse;

//# sourceMappingURL=npasse.support.js.map