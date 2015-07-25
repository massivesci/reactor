/**********************************************************\
** Static.jsx                                             **
**                                                        **
** The root node of the Reactor app.                      **
**                                                        **
** Designed and engineered by Worb Corp.                  **
\**********************************************************/

var React = require('react');

var Static = React.createClass({
  render: function(){
    return (
      <div>
          <h1>{this.props.params.slug}</h1>
      </div>
    );
  }
});

module.exports = Static;
