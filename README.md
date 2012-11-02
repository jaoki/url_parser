url_parser
==========

url_parser is to parse urls into paths, query parameters and fragment.

It is under the MIT license.

Usage
-------

    var parser = new UrlParser("http://example.com/path1/path2?a=some&b=1&c=true#target1");
    
    parser.paths.exists("path1"); // --> true
    parser.paths.exists("path2"); // --> true
    parser.paths.exists("somepath"); // --> false
    parser.paths.exists(0); // --> true
    parser.paths.exists(1); // --> true
    parser.paths.exists(2); // --> false
    parser.paths.length(); // --> 2
    
    parser.paths.get(0); // --> "path1"
    parser.paths.get(1); // --> "path2"

    parser.fragment;  // --> "target1"
    
    parser.params.get(0).name;  // --> "a"
    parser.params.get(0).value;  // --> "some" as string
    parser.params.get('a');  // --> "some" as string
    
    parser.params.exists(1);  // --> true
    parser.params.exists("b");  // --> true
    parser.params.get(1).name;  // --> "b"
    parser.params.get(1).value;  // --> 1 as number
    parser.params.get('b');  // --> 1 as number
    

    parser.params.exists("c");  // --> true
    parser.params.exists(2);  // --> true
    parser.params.get(2).name;  // --> "c"
    parser.params.get(2).value;  // --> true as boolean
    parser.params.get('c');  // --> true as boolean

    parser.params.exists(100);  // --> false
    parser.params.exists("param1");  // --> false

In Future (Not Implemented yet)
----------
    parser.paths.indexOf("path1"); // --> 0
    parser.paths.indexOf("path2"); // --> 1

License
-------

The MIT License (MIT)
Copyright (c) 2012 Jun Aoki <jun.aoki.dev@gmail.com> https://github.com/jaoki/url_parser

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

