/*;
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

const aply = require( "aply" );
const execd = require( "execd" );
const falzy = require( "falzy" );
const mrkd = require( "mrkd" );
const protype = require( "protype" );
const shft = require( "shft" );
const zelf = require( "zelf" );

const CALLED_ONCE = Symbol( "called-once" );
const PASSABLE = Symbol( "passable" );

const npasse = function npasse( callback, context, parameter ){
	/*;
		@meta-configuration:
			{
				"callback:required": "function",
				"context:required": "*",
				"parameter": "..."
			}
		@end-meta-configuration
	*/

	if( falzy( callback ) ||
		!protype( callback, FUNCTION ) ||
		!mrkd( CALLED_ONCE, callback, true ) )
	{
		throw new Error( "invalid callback" );
	}

	if( execd( callback ) ){
		return callback;
	}

	context = zelf( context );

	parameter = shft( arguments, 2 );

	if( mrkd( PASSABLE, callback, true ) ){
		return aply( callback.passed, context, parameter );
	}

	return aply( callback, context, parameter );
};

module.exports = npasse;
