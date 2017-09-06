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

var assert = require("should");



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

				assert.deepEqual((0, _from2.default)(arguments), [null, "hello", 1, 2, 3], "should be equal to [ null, 'hello', 1, 2, 3 ]");
			};

			callback.passed = function passed() {
				callback.apply(this, (0, _from2.default)(arguments));

				assert.deepEqual(this, { "hello": "world" }, "should be equal to { 'hello': 'world' }");

				assert.deepEqual((0, _from2.default)(arguments), [null, "hello", 1, 2, 3], "should be equal to [ null, 'hello', 1, 2, 3 ]");

			};

			callback[CALLED_ONCE] = CALLED_ONCE;

			callback[PASSABLE] = PASSABLE;

			npasse(callback, { "hello": "world" }, null, "hello", 1, 2, 3);

		});
	});

});
//: @end-client
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlc3Quc3VwcG9ydC5qcyJdLCJuYW1lcyI6WyJhc3NlcnQiLCJyZXF1aXJlIiwibnBhc3NlIiwiZGVzY3JpYmUiLCJpdCIsIkNBTExFRF9PTkNFIiwiUEFTU0FCTEUiLCJjYWxsYmFjayIsImRlZXBFcXVhbCIsImFyZ3VtZW50cyIsInBhc3NlZCIsImFwcGx5Il0sIm1hcHBpbmdzIjoiQUFBQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBbURBLElBQU1BLFNBQVNDLFFBQVMsUUFBVCxDQUFmOzs7O0FBSUE7QUFDQSxJQUFNQyxTQUFTRCxRQUFTLHFCQUFULENBQWY7QUFDQTs7Ozs7Ozs7QUFRQTtBQUNBRSxTQUFVLFFBQVYsRUFBb0IsWUFBTzs7QUFFMUJBLFVBQVUsZ0RBQVYsRUFBNEQsWUFBTztBQUNsRUMsS0FBSSwrQkFBSixFQUFxQyxZQUFPOztBQUUzQyxPQUFJQyxjQUFjLHNCQUFRLGFBQVIsQ0FBbEI7QUFDQSxPQUFJQyxXQUFXLHNCQUFRLFVBQVIsQ0FBZjtBQUNBLE9BQUlDLFdBQVcsU0FBU0EsUUFBVCxHQUFvQjtBQUNsQ1AsV0FBT1EsU0FBUCxDQUFrQixJQUFsQixFQUF3QixFQUFFLFNBQVMsT0FBWCxFQUF4QixFQUE4Qyx5Q0FBOUM7O0FBRUFSLFdBQU9RLFNBQVAsQ0FBa0Isb0JBQVlDLFNBQVosQ0FBbEIsRUFBMkMsQ0FBRSxJQUFGLEVBQVEsT0FBUixFQUFpQixDQUFqQixFQUFvQixDQUFwQixFQUF1QixDQUF2QixDQUEzQyxFQUF1RSwrQ0FBdkU7QUFDQSxJQUpEOztBQU1BRixZQUFTRyxNQUFULEdBQWtCLFNBQVNBLE1BQVQsR0FBa0I7QUFDbkNILGFBQVNJLEtBQVQsQ0FBZ0IsSUFBaEIsRUFBc0Isb0JBQVlGLFNBQVosQ0FBdEI7O0FBRUFULFdBQU9RLFNBQVAsQ0FBa0IsSUFBbEIsRUFBd0IsRUFBRSxTQUFTLE9BQVgsRUFBeEIsRUFBOEMseUNBQTlDOztBQUVBUixXQUFPUSxTQUFQLENBQWtCLG9CQUFZQyxTQUFaLENBQWxCLEVBQTJDLENBQUUsSUFBRixFQUFRLE9BQVIsRUFBaUIsQ0FBakIsRUFBb0IsQ0FBcEIsRUFBdUIsQ0FBdkIsQ0FBM0MsRUFBdUUsK0NBQXZFOztBQUVBLElBUEQ7O0FBU0FGLFlBQVVGLFdBQVYsSUFBMEJBLFdBQTFCOztBQUVBRSxZQUFVRCxRQUFWLElBQXVCQSxRQUF2Qjs7QUFFQUosVUFBUUssUUFBUixFQUFrQixFQUFFLFNBQVMsT0FBWCxFQUFsQixFQUF3QyxJQUF4QyxFQUE4QyxPQUE5QyxFQUF1RCxDQUF2RCxFQUEwRCxDQUExRCxFQUE2RCxDQUE3RDs7QUFFQSxHQXpCRDtBQTBCQSxFQTNCRDs7QUE2QkEsQ0EvQkQ7QUFnQ0EiLCJmaWxlIjoidGVzdC5zdXBwb3J0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qO1xuXHRAdGVzdC1saWNlbnNlOlxuXHRcdFRoZSBNSVQgTGljZW5zZSAoTUlUKVxuXHRcdEBtaXQtbGljZW5zZVxuXG5cdFx0Q29weXJpZ2h0IChAYykgMjAxNyBSaWNoZXZlIFNpb2RpbmEgQmViZWRvclxuXHRcdEBlbWFpbDogcmljaGV2ZS5iZWJlZG9yQGdtYWlsLmNvbVxuXG5cdFx0UGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuXHRcdG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcblx0XHRpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG5cdFx0dG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuXHRcdGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuXHRcdGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG5cblx0XHRUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGxcblx0XHRjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuXG5cdFx0VEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuXHRcdElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuXHRcdEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuXHRcdEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcblx0XHRMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuXHRcdE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFXG5cdFx0U09GVFdBUkUuXG5cdEBlbmQtdGVzdC1saWNlbnNlXG5cblx0QHRlc3QtY29uZmlndXJhdGlvbjpcblx0XHR7XG5cdFx0XHRcInBhY2thZ2VcIjogXCJucGFzc2VcIixcblx0XHRcdFwicGF0aFwiOiBcIm5wYXNzZS90ZXN0Lm1vZHVsZS5qc1wiLFxuXHRcdFx0XCJmaWxlXCI6IFwidGVzdC5tb2R1bGUuanNcIixcblx0XHRcdFwibW9kdWxlXCI6IFwidGVzdFwiLFxuXHRcdFx0XCJhdXRob3JcIjogXCJSaWNoZXZlIFMuIEJlYmVkb3JcIixcblx0XHRcdFwiZU1haWxcIjogXCJyaWNoZXZlLmJlYmVkb3JAZ21haWwuY29tXCIsXG5cdFx0XHRcInJlcG9zaXRvcnlcIjogXCJodHRwczovL2dpdGh1Yi5jb20vdm9sa292YXN5c3RlbXMvbnBhc3NlLmdpdFwiXG5cdFx0fVxuXHRAZW5kLXRlc3QtY29uZmlndXJhdGlvblxuXG5cdEB0ZXN0LWRvY3VtZW50YXRpb246XG5cblx0QGVuZC10ZXN0LWRvY3VtZW50YXRpb25cblxuXHRAaW5jbHVkZTpcblx0XHR7XG5cdFx0XHRcImFzc2VydFwiOiBcInNob3VsZFwiLFxuXHRcdFx0XCJucGFzc2VcIjogXCJucGFzc2VcIlxuXHRcdH1cblx0QGVuZC1pbmNsdWRlXG4qL1xuXG5jb25zdCBhc3NlcnQgPSByZXF1aXJlKCBcInNob3VsZFwiICk7XG5cblxuXG4vLzogQGNsaWVudDpcbmNvbnN0IG5wYXNzZSA9IHJlcXVpcmUoIFwiLi9ucGFzc2Uuc3VwcG9ydC5qc1wiICk7XG4vLzogQGVuZC1jbGllbnRcblxuXG5cblxuXG5cblxuLy86IEBjbGllbnQ6XG5kZXNjcmliZSggXCJucGFzc2VcIiwgKCApID0+IHtcblxuXHRkZXNjcmliZSggXCJgbnBhc3NlIHdpdGggY2FsbGJhY2ssIGNvbnRleHQsIGFuZCBwYXJhbWV0ZXJgXCIsICggKSA9PiB7XG5cdFx0aXQoIFwic2hvdWxkIGNhbGwgcGFzc2FibGUgY2FsbGJhY2tcIiwgKCApID0+IHtcblxuXHRcdFx0bGV0IENBTExFRF9PTkNFID0gU3ltYm9sKCBcImNhbGxlZC1vbmNlXCIgKTtcblx0XHRcdGxldCBQQVNTQUJMRSA9IFN5bWJvbCggXCJwYXNzYWJsZVwiICk7XG5cdFx0XHRsZXQgY2FsbGJhY2sgPSBmdW5jdGlvbiBjYWxsYmFjayggKXtcblx0XHRcdFx0YXNzZXJ0LmRlZXBFcXVhbCggdGhpcywgeyBcImhlbGxvXCI6IFwid29ybGRcIiB9LCBcInNob3VsZCBiZSBlcXVhbCB0byB7ICdoZWxsbyc6ICd3b3JsZCcgfVwiICk7XG5cblx0XHRcdFx0YXNzZXJ0LmRlZXBFcXVhbCggQXJyYXkuZnJvbSggYXJndW1lbnRzICksIFsgbnVsbCwgXCJoZWxsb1wiLCAxLCAyLCAzIF0sIFwic2hvdWxkIGJlIGVxdWFsIHRvIFsgbnVsbCwgJ2hlbGxvJywgMSwgMiwgMyBdXCIgKTtcblx0XHRcdH07XG5cblx0XHRcdGNhbGxiYWNrLnBhc3NlZCA9IGZ1bmN0aW9uIHBhc3NlZCggKXtcblx0XHRcdFx0Y2FsbGJhY2suYXBwbHkoIHRoaXMsIEFycmF5LmZyb20oIGFyZ3VtZW50cyApICk7XG5cblx0XHRcdFx0YXNzZXJ0LmRlZXBFcXVhbCggdGhpcywgeyBcImhlbGxvXCI6IFwid29ybGRcIiB9LCBcInNob3VsZCBiZSBlcXVhbCB0byB7ICdoZWxsbyc6ICd3b3JsZCcgfVwiICk7XG5cblx0XHRcdFx0YXNzZXJ0LmRlZXBFcXVhbCggQXJyYXkuZnJvbSggYXJndW1lbnRzICksIFsgbnVsbCwgXCJoZWxsb1wiLCAxLCAyLCAzIF0sIFwic2hvdWxkIGJlIGVxdWFsIHRvIFsgbnVsbCwgJ2hlbGxvJywgMSwgMiwgMyBdXCIgKTtcblxuXHRcdFx0fTtcblxuXHRcdFx0Y2FsbGJhY2tbIENBTExFRF9PTkNFIF0gPSBDQUxMRURfT05DRTtcblxuXHRcdFx0Y2FsbGJhY2tbIFBBU1NBQkxFIF0gPSBQQVNTQUJMRTtcblxuXHRcdFx0bnBhc3NlKCBjYWxsYmFjaywgeyBcImhlbGxvXCI6IFwid29ybGRcIiB9LCBudWxsLCBcImhlbGxvXCIsIDEsIDIsIDMgKTtcblxuXHRcdH0gKTtcblx0fSApO1xuXG59ICk7XG4vLzogQGVuZC1jbGllbnRcblxuXG5cbiJdfQ==
//# sourceMappingURL=test.support.js.map
