/**********************************************************\
** Nav.jsx                                                **
**                                                        **
** The root node of the Reactor app.                      **
**                                                        **
** Designed and engineered by Worb Corp.                  **
\**********************************************************/

var React = require('react');
var Link = require('react-router').Link;

var Nav = React.createClass({
  render: function(){
      return (
          <nav className="main">
              <div className="brand" onClick={this.handleExit}>
                  Reactor
              </div>
              <ul>
                  <li><Link to={'/home'}>Home</Link></li>
                  <li><Link to={'/about'}>About</Link></li>
                  <li><Link to={'/static-test'}>Static Test</Link></li>
              </ul>
          </nav>
      );
  }
});

module.exports = Nav;
