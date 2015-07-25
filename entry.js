var React = require('react/addons');
var Root = require('./jsx/Root.jsx');

// exports less to dist/style.css per extract-text-webpack-plugin
require('./less/app.less');

// export required by static gen webpack plugin. Runs on server, returns html via callback
module.exports = function(path, props, callback) {
    var html = '<!DOCTYPE html>' + React.renderToString(React.createElement(Root, {}));
    callback(html);
}

// checks to see if we're in browser context, and renders
if(typeof document !== 'undefined') {
    React.render(React.createElement(Root, {}), document);
}
