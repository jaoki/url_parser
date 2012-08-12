function url_parser(url){
	this.url = url;
};

url_parser.prototype.url = function() {
    return this.url;
};

url_parser.prototype.parse = function() {
	if(url === undefined || url === null )
		return {};

	var queryStart = url.indexOf("?");
};



