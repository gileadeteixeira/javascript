const {html} = require('./base.js');
// <.+>.+<\/.+>
console.log(html.match(/<.+>.+<\/.+>/g));
console.log(html.match(/<.+?>.+?<\/.+?>/g));