var React = require('react');

var TrackShape = {
  title:React.PropTypes.string.isRequired,
  artwork_url: React.PropTypes.string
};
Module.exports = React.createClass({
  propTypes: {
    track: React.PropType.shape(TrackShape).isRequired
  },
  render: function() {
    <div className="track">
      <img src={this.props.track.artwork_url} classname="img-thumbnail artwork" />
      <div className="title">{this.props.track.title}</div>
    </div>
  }
});
