/* START - js-url-access */

function appendToDOM(parentDomId, childStr) {
	document.getElementById(parentDomId).innerHTML += childStr;
}

function printJsAPIs(tableDomId, apiArray) {
	for (var i = 0; i < apiArray.length;  i++) {
		var str = "<tr><td>" + apiArray[i] + " : ";
		str += "</td><td>" + eval(apiArray[i]);
		str += "</td></tr>";
		appendToDOM(tableDomId, str);
	}
}

var jsAPIsForFullURL = [
	"window.location.href",
	"document.URL",
	"top.window.location.href",
	"top.document.URL"
];

var jsAPIsForPartialURL = [
	"window.location.host",
	"window.location.hostname",
	"window.location.port",
	"window.location.protocol",
	"window.location.hash",
	"window.location.search",
	"window.location.origin"
];

printJsAPIs("js-apis-fullUrl", jsAPIsForFullURL);
printJsAPIs("js-apis-partialUrl", jsAPIsForPartialURL);

// Special cases :
// iFrame
// domain forwarding with/without masking 

/* END - js-url-access  */