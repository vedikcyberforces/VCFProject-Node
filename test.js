const { debugPort } = require("process");
const url = require("url");

var c_url = new URL("https://this.com/submit?id=12&id=13&id=15&class=English");
var s_p = c_url.searchParams;


// console.log(s_p);