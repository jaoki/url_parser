url_parser
==========

url_parser is to parse urls into paths, query parameters and fragment.

It is under the MIT license.

Usage
-------

    var parser = new UrlParser("http://example.com/path1/path2?a=some&b=1&c=true#target1");
    var result = parser.parse(); 
    
    result.paths.get(0); // --> "path1"
    result.paths.get(1); // --> "path2"
    
    result.fragment;  // --> "target1"
    
    result.params.get(0).name;  // --> "a"
    result.params.get(0).value;  // --> "some" as string
    result.params.get('a');  // --> "some" as string
    
    result.params.get(1).name;  // --> "b"
    result.params.get(1).value;  // --> 1 as number
    result.params.get('b');  // --> 1 as number
    

    result.params.get(2).name;  // --> "c"
    result.params.get(2).value;  // --> true as boolean
    result.params.get('c');  // --> true as boolean

In Future (Not Implemented yet)
----------
    result.paths.exist("path2"); // --> true
    result.paths.exist("somepath"); // --> false
    result.paths.indexOf("path1"); // --> 0
    result.paths.indexOf("path2"); // --> 1
    
    result.params.exist('a'); // --> true

    result.params.exist('b'); // --> true
    result.params.exist('c'); // --> true

License
-------

The MIT License (MIT)
Copyright (c) 2012 Jun Aoki <jun.aoki.dev@gmail.com>

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

