/**
 * 
 * The MIT License (MIT)
 * Copyright (c) 2012 Jun Aoki <jun.aoki.dev@gmail.com> https://github.com/jaoki/url_parser
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 *
 */

/*jslint nomen: true, white: true, browser : true */
"use strict";

function UrlParser(url){
	var _url;
	if(typeof url === "undefined"){
		_url = window.location.href;
	}else{
		_url = url;
	}

	var _fragmentPosition = _url.indexOf("#");
	var _fragmentExist = _fragmentPosition !== -1;
	var _fragmentStart = _fragmentPosition;

	var _protocolEnds = _url.indexOf("://") + 3;

	var _pathStart = _url.substring(_protocolEnds).indexOf("/") + _protocolEnds + 1;

	var _questionMarkPosition = _url.indexOf("?");


	var _queryExist;
   	if(_questionMarkPosition !== -1 && _questionMarkPosition < _url.length){
		if(_fragmentExist){
			if(_questionMarkPosition < _fragmentPosition){
				_queryExist	= true;
			}else{
				_queryExist	= false;
			}
		}else{
			_queryExist	= true;
		}
	}else{
		_queryExist	= false;
	}

	var _queryStart = _url.indexOf("?") + 1;

	// analyze path
	function PathsClass(paths){
		var _paths = paths;

		this.get = function(index){
			return _paths[index];
		};

		this.exists = function(index){
			if(typeof index === "string"){
				for(var i = 0; i < _paths.length; i++){
					if(_paths[i] == index){
						return true;
					}
				}
				return false;
			}else if(typeof index == "number"){
				return _paths[index] !== undefined;
			}
			return undefined;
		};

		this.length = function(){
			return _paths.length;
		};

	}

	if(_pathStart === 0){
		this.paths = new PathsClass([]);
	}else{
		if(_queryExist){
			this.paths = new PathsClass(_url.substring(_pathStart, _queryStart - 1).split("/"));
		}else if(_fragmentExist){
			this.paths = new PathsClass(_url.substring(_pathStart, _fragmentStart).split("/"));
		}else{
			this.paths = new PathsClass(_url.substring(_pathStart).split("/"));
		}
	}

	// Analyze query parameters
	function ParamsClass(params){
		var _params = params;

		this.get = function(index){
			if(typeof index === "string"){
				for(var i = 0; i < _params.length; i++){
					if(_params[i].name == index){
						return _params[i].value;
					}
				}
			}else if(typeof index == "number"){
				return _params[index];
			}
		}

		this.exists = function(index){
			if(typeof index === "string"){
				for(var i = 0; i < _params.length; i++){
					if(_params[i].name == index){
						return true;
					}
				}
				return false;
			}else if(typeof index == "number"){
				return _params[index] !== undefined;
			}
			return undefined;
		}

	}


	var params = new Array();
//	if(_queryStart != 0){
	if(_queryExist){
		var numberPattern = new RegExp("^[0-9]*$");
		
		var querys;
		if(_fragmentExist){
			querys = _url.substring(_queryStart, _fragmentStart).split("&");
		}else{
			querys = _url.substring(_queryStart).split("&");
		}
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

			params.push({"name" : query[0], "value" : value});
		}
	}

	this.params = new ParamsClass(params);

	if(_fragmentExist){
		this.fragment = _url.substring(_fragmentStart + 1);
	}

	this.getUrl = function() {
		return _url;
	};

};


