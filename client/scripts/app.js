// Your ReactJS code here
var React = require('React');
var songList = require('./songlist.jsx');
var config = require('./config.js');
var searchBar = require('./searchbar.jsx');

var searchResults = config.search();


var searchData = React.createElement(songList, searchResults);
//Multiple React render functions?
var searchBar = React.createElement(searchBar);
React.render(
    searchBar,
    document.getElementById('search')
);
React.render(searchData, document.querySelector('.container'));
