
const assert = require( "assert" );
const npasse = require( "./npasse.js" );

let CALLED_ONCE = Symbol( "called-once" );
let PASSABLE = Symbol( "passable" );
let callback = function callback( ){
	assert.deepEqual( this, { "hello": "world" }, "should be deeply equal" );

	assert.deepEqual( Array.from( arguments ), [ null, "hello", 1, 2, 3 ], "should be deeply equal" );
};

callback.passed = function passed( ){
	callback.apply( this, Array.from( arguments ) );

	assert.deepEqual( this, { "hello": "world" }, "should be deeply equal" );

	assert.deepEqual( Array.from( arguments ), [ null, "hello", 1, 2, 3 ], "should be deeply equal" );

	console.log( "ok" );
};

callback[ CALLED_ONCE ] = CALLED_ONCE;

callback[ PASSABLE ] = PASSABLE;

npasse( callback, { "hello": "world" }, null, "hello", 1, 2, 3 );
