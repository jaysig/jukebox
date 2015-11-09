// Your ReactJS code here
var React = require('react');
var songList = require('songList.jsx');
var config = require('config.js');








var element = react.createElement(songList, config.search());

react.render(element, document.querySelector(.container));
