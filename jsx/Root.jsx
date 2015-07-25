/**********************************************************\
** Root.jsx                                               **
**                                                        **
** The root node of the Reactor app.                      **
**                                                        **
** Designed and engineered by Worb Corp.                  **
\**********************************************************/

var React = require('react');

var App = React.createClass({
  // The entry point of the application
  render: function(){
    return (
      <html>
          <head>
              <title>{this.props.title}</title>
              <meta name="viewport" content="width=device-width" />
              <meta name="viewport" content="initial-scale=1.0, user-scalable=no" />
              <link href='/dist/style.css' rel='stylesheet' type='text/css' />
          </head>
          <body>
            <div key="app">
                Home
            </div>
            <script src="/dist/bundle.js"/>
          </body>
      </html>
    );
  }
});

module.exports = App;
