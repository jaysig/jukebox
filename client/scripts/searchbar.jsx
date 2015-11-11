//Render
//State
//Update Query
var React = require('react');
var config = require('./config.js');


//config has the config.search function
module.exports = React.createClass({
    getInitialState: function() {
      return {query: ''};
      // return {value: ''};
    },
    updateQuery: function(event){
      this.setState({
        query: event.target.value
      });
    },
    clearSearch: function(){
      this.setState({
        query:''
      })
    },
    // handleChange: function(event) {
    //   this.setState({value: event.target.value});
    // },
    render: function(){
      //if not typing
        //config.search on the value
        // var value = this.state.value;
        var iconClasses = 'glyphicon glyphicon-remove form-control-feedback clickable';
        if(this.state.query === ''){
          iconClasses += 'hidden';
        }
        return(
          <div className ="form-group has-feedback">
          <input type="text" value={this.state.query} className="form-control" onChange={this.updateQuery} />
          <span onClick={this.clearSearch} className={ iconClasses }></span>
          </div>
        );

          // return React.DOM.div({},
        //     new React.DOM.p({}, 'Search box'),
        //     new React.DOM.input({})
        // );
    }
});


//Original
// module.exports = React.createClass({
//   getInitialState: function() {
//     return {value: ''};
//   },
//   handleChange: function(event) {
//     this.setState({value: event.target.value});
//   },
//   render: function() {
//     var value = this.state.value;
//     return <input type="text" value={value} onChange={this.handleChange} />
//   }
// })
//
// event.target.value
// use the this keyword
//
// update:function
//
// this.getState - Active vs. In-Active state
//
// onChange: this.update

//http://ctheu.com/2015/02/12/how-to-communicate-between-react-components/
