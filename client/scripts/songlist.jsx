var React = require('react');
var Song = require('song.jsx');

module.exports = React.createClass({
  render: function(){
    var list = this.props.songData.map(function(songProps){
      return <Song{...songProps}>
    });
  },
});
