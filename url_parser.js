/**
 * 
 * The MIT License (MIT)
 * Copyright (c) 2012 Jun Aoki <jun.aoki.dev@gmail.com>
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 *
 */

function UrlParser(url){
	if(typeof url == "undefined")
		this.url = window.location.href;
	else
		this.url = url;

	this.hostnameStart = url.indexOf("://") + 3;
	this.pathStart = url.substring(this.hostnameStart).indexOf("/") + this.hostnameStart + 1;
	this.queryStart = url.indexOf("?") + 1;
	this.fragmentStart = url.indexOf("#") + 1;

	this.result = new Object();

	if(this.queryStart == -1){
		this.result.path = new Array();
	}else{
		this.result.path = this.url.substring(this.pathStart, this.queryStart - 1).split("/");
	}


	this.result.param = new Array();
	if(this.queryStart != -1){
		var numberPattern = new RegExp("^[0-9]$");
		
		var querys = this.url.substring(this.queryStart, this.fragmentStart - 1).split("&");
		for(var i = 0; i < querys.length; i++){
			var query = querys[i].split("=");
			var rawvalue = query[1];
			var value;
			if(rawvalue.toLowerCase() == "true")
				value = true;
			else if(rawvalue.toLowerCase() == "false")
				value = false;
			else if(numberPattern.test(rawvalue))
				value = parseInt(rawvalue);
			else
				value = rawvalue;

			this.result.param.push({"name" : query[0], "value" : value});
		}
	}

	this.result.fragment = new Array();
	if(this.fragmentStart != -1){
		this.result.fragment[0] = this.url.substring(this.fragmentStart);
	}

};

UrlParser.prototype.getUrl = function() {
    return this.url;
};

// TODO hide this
UrlParser.prototype.getHostnameStart = function() {
    return this.hostnameStart;
};

// TODO hide this
UrlParser.prototype.getPathStart = function() {
    return this.pathStart;
};

// TODO hide this
UrlParser.prototype.getQueryStart = function() {
    return this.queryStart;
};

// TODO hide this
UrlParser.prototype.getFragmentStart = function() {
    return this.fragmentStart;
};

UrlParser.prototype.parse = function() {
	return this.result;
};



