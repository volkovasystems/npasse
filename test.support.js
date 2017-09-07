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
              */var _from = require("babel-runtime/core-js/array/from");var _from2 = _interopRequireDefault(_from);var _symbol = require("babel-runtime/core-js/symbol");var _symbol2 = _interopRequireDefault(_symbol);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

var assert = require("should/as-function");



//: @client:
var npasse = require("./npasse.support.js");
//: @end-client







//: @client:
describe("npasse", function () {

	describe("`npasse with callback, context, and parameter`", function () {
		it("should call passable callback", function () {

			var CALLED_ONCE = (0, _symbol2.default)("called-once");
			var PASSABLE = (0, _symbol2.default)("passable");
			var callback = function callback() {
				assert.deepEqual(this, { "hello": "world" }, "should be equal to { 'hello': 'world' }");

				assert.deepEqual((0, _from2.default)(arguments), [null, "hello", 1, 2, 3]);
			};

			callback.passed = function passed() {
				callback.apply(this, (0, _from2.default)(arguments));

				assert.deepEqual(this, { "hello": "world" });

				assert.deepEqual((0, _from2.default)(arguments), [null, "hello", 1, 2, 3]);

			};

			callback[CALLED_ONCE] = CALLED_ONCE;

			callback[PASSABLE] = PASSABLE;

			npasse(callback, { "hello": "world" }, null, "hello", 1, 2, 3);

		});
	});

});
//: @end-client
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlc3Quc3VwcG9ydC5qcyJdLCJuYW1lcyI6WyJhc3NlcnQiLCJyZXF1aXJlIiwibnBhc3NlIiwiZGVzY3JpYmUiLCJpdCIsIkNBTExFRF9PTkNFIiwiUEFTU0FCTEUiLCJjYWxsYmFjayIsImRlZXBFcXVhbCIsImFyZ3VtZW50cyIsInBhc3NlZCIsImFwcGx5Il0sIm1hcHBpbmdzIjoiQUFBQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBbURBLElBQU1BLFNBQVNDLFFBQVMsb0JBQVQsQ0FBZjs7OztBQUlBO0FBQ0EsSUFBTUMsU0FBU0QsUUFBUyxxQkFBVCxDQUFmO0FBQ0E7Ozs7Ozs7O0FBUUE7QUFDQUUsU0FBVSxRQUFWLEVBQW9CLFlBQU87O0FBRTFCQSxVQUFVLGdEQUFWLEVBQTRELFlBQU87QUFDbEVDLEtBQUksK0JBQUosRUFBcUMsWUFBTzs7QUFFM0MsT0FBSUMsY0FBYyxzQkFBUSxhQUFSLENBQWxCO0FBQ0EsT0FBSUMsV0FBVyxzQkFBUSxVQUFSLENBQWY7QUFDQSxPQUFJQyxXQUFXLFNBQVNBLFFBQVQsR0FBb0I7QUFDbENQLFdBQU9RLFNBQVAsQ0FBa0IsSUFBbEIsRUFBd0IsRUFBRSxTQUFTLE9BQVgsRUFBeEIsRUFBOEMseUNBQTlDOztBQUVBUixXQUFPUSxTQUFQLENBQWtCLG9CQUFZQyxTQUFaLENBQWxCLEVBQTJDLENBQUUsSUFBRixFQUFRLE9BQVIsRUFBaUIsQ0FBakIsRUFBb0IsQ0FBcEIsRUFBdUIsQ0FBdkIsQ0FBM0M7QUFDQSxJQUpEOztBQU1BRixZQUFTRyxNQUFULEdBQWtCLFNBQVNBLE1BQVQsR0FBa0I7QUFDbkNILGFBQVNJLEtBQVQsQ0FBZ0IsSUFBaEIsRUFBc0Isb0JBQVlGLFNBQVosQ0FBdEI7O0FBRUFULFdBQU9RLFNBQVAsQ0FBa0IsSUFBbEIsRUFBd0IsRUFBRSxTQUFTLE9BQVgsRUFBeEI7O0FBRUFSLFdBQU9RLFNBQVAsQ0FBa0Isb0JBQVlDLFNBQVosQ0FBbEIsRUFBMkMsQ0FBRSxJQUFGLEVBQVEsT0FBUixFQUFpQixDQUFqQixFQUFvQixDQUFwQixFQUF1QixDQUF2QixDQUEzQzs7QUFFQSxJQVBEOztBQVNBRixZQUFVRixXQUFWLElBQTBCQSxXQUExQjs7QUFFQUUsWUFBVUQsUUFBVixJQUF1QkEsUUFBdkI7O0FBRUFKLFVBQVFLLFFBQVIsRUFBa0IsRUFBRSxTQUFTLE9BQVgsRUFBbEIsRUFBd0MsSUFBeEMsRUFBOEMsT0FBOUMsRUFBdUQsQ0FBdkQsRUFBMEQsQ0FBMUQsRUFBNkQsQ0FBN0Q7O0FBRUEsR0F6QkQ7QUEwQkEsRUEzQkQ7O0FBNkJBLENBL0JEO0FBZ0NBIiwiZmlsZSI6InRlc3Quc3VwcG9ydC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG4vKjtcblx0QHRlc3QtbGljZW5zZTpcblx0XHRUaGUgTUlUIExpY2Vuc2UgKE1JVClcblx0XHRAbWl0LWxpY2Vuc2VcblxuXHRcdENvcHlyaWdodCAoQGMpIDIwMTcgUmljaGV2ZSBTaW9kaW5hIEJlYmVkb3Jcblx0XHRAZW1haWw6IHJpY2hldmUuYmViZWRvckBnbWFpbC5jb21cblxuXHRcdFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcblx0XHRvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG5cdFx0aW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuXHRcdHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcblx0XHRjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcblx0XHRmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuXG5cdFx0VGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsXG5cdFx0Y29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cblxuXHRcdFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1Jcblx0XHRJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcblx0XHRGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcblx0XHRBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG5cdFx0TElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcblx0XHRPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRVxuXHRcdFNPRlRXQVJFLlxuXHRAZW5kLXRlc3QtbGljZW5zZVxuXG5cdEB0ZXN0LWNvbmZpZ3VyYXRpb246XG5cdFx0e1xuXHRcdFx0XCJwYWNrYWdlXCI6IFwibnBhc3NlXCIsXG5cdFx0XHRcInBhdGhcIjogXCJucGFzc2UvdGVzdC5tb2R1bGUuanNcIixcblx0XHRcdFwiZmlsZVwiOiBcInRlc3QubW9kdWxlLmpzXCIsXG5cdFx0XHRcIm1vZHVsZVwiOiBcInRlc3RcIixcblx0XHRcdFwiYXV0aG9yXCI6IFwiUmljaGV2ZSBTLiBCZWJlZG9yXCIsXG5cdFx0XHRcImVNYWlsXCI6IFwicmljaGV2ZS5iZWJlZG9yQGdtYWlsLmNvbVwiLFxuXHRcdFx0XCJyZXBvc2l0b3J5XCI6IFwiaHR0cHM6Ly9naXRodWIuY29tL3ZvbGtvdmFzeXN0ZW1zL25wYXNzZS5naXRcIlxuXHRcdH1cblx0QGVuZC10ZXN0LWNvbmZpZ3VyYXRpb25cblxuXHRAdGVzdC1kb2N1bWVudGF0aW9uOlxuXG5cdEBlbmQtdGVzdC1kb2N1bWVudGF0aW9uXG5cblx0QGluY2x1ZGU6XG5cdFx0e1xuXHRcdFx0XCJhc3NlcnRcIjogXCJzaG91bGRcIixcblx0XHRcdFwibnBhc3NlXCI6IFwibnBhc3NlXCJcblx0XHR9XG5cdEBlbmQtaW5jbHVkZVxuKi9cblxuY29uc3QgYXNzZXJ0ID0gcmVxdWlyZSggXCJzaG91bGQvYXMtZnVuY3Rpb25cIiApO1xuXG5cblxuLy86IEBjbGllbnQ6XG5jb25zdCBucGFzc2UgPSByZXF1aXJlKCBcIi4vbnBhc3NlLnN1cHBvcnQuanNcIiApO1xuLy86IEBlbmQtY2xpZW50XG5cblxuXG5cblxuXG5cbi8vOiBAY2xpZW50OlxuZGVzY3JpYmUoIFwibnBhc3NlXCIsICggKSA9PiB7XG5cblx0ZGVzY3JpYmUoIFwiYG5wYXNzZSB3aXRoIGNhbGxiYWNrLCBjb250ZXh0LCBhbmQgcGFyYW1ldGVyYFwiLCAoICkgPT4ge1xuXHRcdGl0KCBcInNob3VsZCBjYWxsIHBhc3NhYmxlIGNhbGxiYWNrXCIsICggKSA9PiB7XG5cblx0XHRcdGxldCBDQUxMRURfT05DRSA9IFN5bWJvbCggXCJjYWxsZWQtb25jZVwiICk7XG5cdFx0XHRsZXQgUEFTU0FCTEUgPSBTeW1ib2woIFwicGFzc2FibGVcIiApO1xuXHRcdFx0bGV0IGNhbGxiYWNrID0gZnVuY3Rpb24gY2FsbGJhY2soICl7XG5cdFx0XHRcdGFzc2VydC5kZWVwRXF1YWwoIHRoaXMsIHsgXCJoZWxsb1wiOiBcIndvcmxkXCIgfSwgXCJzaG91bGQgYmUgZXF1YWwgdG8geyAnaGVsbG8nOiAnd29ybGQnIH1cIiApO1xuXG5cdFx0XHRcdGFzc2VydC5kZWVwRXF1YWwoIEFycmF5LmZyb20oIGFyZ3VtZW50cyApLCBbIG51bGwsIFwiaGVsbG9cIiwgMSwgMiwgMyBdICk7XG5cdFx0XHR9O1xuXG5cdFx0XHRjYWxsYmFjay5wYXNzZWQgPSBmdW5jdGlvbiBwYXNzZWQoICl7XG5cdFx0XHRcdGNhbGxiYWNrLmFwcGx5KCB0aGlzLCBBcnJheS5mcm9tKCBhcmd1bWVudHMgKSApO1xuXG5cdFx0XHRcdGFzc2VydC5kZWVwRXF1YWwoIHRoaXMsIHsgXCJoZWxsb1wiOiBcIndvcmxkXCIgfSApO1xuXG5cdFx0XHRcdGFzc2VydC5kZWVwRXF1YWwoIEFycmF5LmZyb20oIGFyZ3VtZW50cyApLCBbIG51bGwsIFwiaGVsbG9cIiwgMSwgMiwgMyBdICk7XG5cblx0XHRcdH07XG5cblx0XHRcdGNhbGxiYWNrWyBDQUxMRURfT05DRSBdID0gQ0FMTEVEX09OQ0U7XG5cblx0XHRcdGNhbGxiYWNrWyBQQVNTQUJMRSBdID0gUEFTU0FCTEU7XG5cblx0XHRcdG5wYXNzZSggY2FsbGJhY2ssIHsgXCJoZWxsb1wiOiBcIndvcmxkXCIgfSwgbnVsbCwgXCJoZWxsb1wiLCAxLCAyLCAzICk7XG5cblx0XHR9ICk7XG5cdH0gKTtcblxufSApO1xuLy86IEBlbmQtY2xpZW50XG5cblxuXG4iXX0=
//# sourceMappingURL=test.support.js.map
