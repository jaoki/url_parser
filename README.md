Do not use it is under development!
==========

url_parser
==========

parse url like http://example.com/path1/path2?a=some&b=1&c=true#target1" to

[
	{
		param : {
			"a" : "some"
		}
	}, 
	{"b" : 1}, 
	{"c" : true}
]

Usage
-------
var parser = UrlParser("http://example.com/path1/path2?a=some&b=1&c=true#target1");
var result = parser.parseJson(); 

result.path[0].name // --> "path1"
result.path[1].name // --> "path2"

result.param[0].name  // --> "a"
result.param[0].value  // --> "some"

result.param[1].name  // --> "b"
result.param[1].value  // --> 1

result.param[2].name  // --> "c"
result.param[2].value  // --> true

result.fragment  // --> "target1"



License
-------

The MIT License (MIT)
Copyright (c) <2012> <Jun Aoki>

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
