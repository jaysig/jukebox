// Your ReactJS code here
var React = require('react');
var songList = require('songList.jsx');
var config = require('config.js');
var searchBar = require('searchBar.jsx');

var searchResults = config.search();


var element = react.createElement(songList, searchResults);

react.render(element, document.querySelector(.container));
