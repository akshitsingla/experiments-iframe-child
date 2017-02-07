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
	"document.URL"
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

var jsAPIsForParentURL = [
	"document.referrer"
];
/*
	LEARNINGS
		- top, window.top, window.parent are inaccessible objects in (Chrome) browser.
		- One way to get parent URL is to pass it as query-param while opening iFrame.
*/

printJsAPIs("js-apis-fullUrl", jsAPIsForFullURL);
printJsAPIs("js-apis-partialUrl", jsAPIsForPartialURL);
printJsAPIs("js-apis-parentUrl", jsAPIsForParentURL);

// Special cases :
// iFrame
// domain forwarding with/without masking 

/* END - js-url-access  */