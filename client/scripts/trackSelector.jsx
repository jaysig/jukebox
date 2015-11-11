var React = require('react');

module.exports = React.createClass({
  handleTrackSelection: function(track){

  },

  render: function(){
    var trackComponents = [];
    var tracks = this.props.tracks || [];
    var i;
    var len = tracks.length;
    for(var i= 0;i<len;i++){
      trackComponents.push(
      <div key={tracks[i].id} className="col-lg-3 col-md-4 col-sm-6 col-xs-12">
        <div className="clickable" onClick={this.handleTrackSelection.bind(this, track[i])}>
          <Track track ={tracks[i]} />
          </div>
        </div>
      );
    }

    return {
      <div class="row">
        {trackComponents}
      </div>
    }
  }
})
