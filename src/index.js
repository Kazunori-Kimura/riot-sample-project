// index.js
const riot = require("riot");
require("./tags/hello");
require("./tags/hoge");

const observer = riot.observable();

// hello, hogeタグをマウント
riot.mount("*", { observer });
