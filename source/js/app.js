var React = require('react');
var ApplicationClass = require('./components/Application.react');
var ApplicationComponent = React.createFactory(ApplicationClass);

React.render(ApplicationComponent(), document.querySelector('body'));
