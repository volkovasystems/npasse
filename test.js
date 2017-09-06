"use strict";

/*;
	@test-license:
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
	@end-test-license

	@test-configuration:
		{
			"package": "npasse",
			"path": "npasse/test.module.js",
			"file": "test.module.js",
			"module": "test",
			"author": "Richeve S. Bebedor",
			"eMail": "richeve.bebedor@gmail.com",
			"repository": "https://github.com/volkovasystems/npasse.git"
		}
	@end-test-configuration

	@test-documentation:

	@end-test-documentation

	@include:
		{
			"assert": "should",
			"npasse": "npasse"
		}
	@end-include
*/

const assert = require( "should" );

//: @server:
const npasse = require( "./npasse.js" );
const mrkd = require( "mrkd" );
//: @end-server






//: @server:
describe( "npasse", ( ) => {

	describe( "`npasse with callback, context, and parameter`", ( ) => {
		it( "should call passable callback", ( ) => {

			let CALLED_ONCE = Symbol( "called-once" );
			let PASSABLE = Symbol( "passable" );
			let callback = function callback( ){
				assert.deepEqual( this, { "hello": "world" }, "should be equal to { 'hello': 'world' }" );

				assert.deepEqual( Array.from( arguments ), [ null, "hello", 1, 2, 3 ] );
			};

			callback.passed = function passed( ){
				callback.apply( this, Array.from( arguments ) );

				assert.deepEqual( this, { "hello": "world" } );

				assert.deepEqual( Array.from( arguments ), [ null, "hello", 1, 2, 3 ] );

			};

			callback[ CALLED_ONCE ] = CALLED_ONCE;

			callback[ PASSABLE ] = PASSABLE;

			npasse( callback, { "hello": "world" }, null, "hello", 1, 2, 3 );

		} );
	} );

} );
//: @end-server






