const { JSDOM } = require("jsdom");

// Create a virtual DOM
const dom = new JSDOM(`<!DOCTYPE html>
<html>
  <body>
    <input type="text" id="mytext" value="Hello, JS">
    <button id="mysubmit">Submit</button>
    <p id="resultElement"></p>
  </body>
</html>`);

// Expose document and window globally
global.document = dom.window.document;
global.window = dom.window;
global.navigator = dom.window.navigator;
