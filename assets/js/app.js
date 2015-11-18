var React = require('react');
var ReactDOM = require('react-dom');
var Releases = require('./Releases.js');

// Snag the initial state that was passed from the server side
var initialState = JSON.parse(document.getElementById('initial-state').innerHTML)

ReactDOM.render(
    <Releases items={initialState} />,
    document.getElementById('releases')
);
 