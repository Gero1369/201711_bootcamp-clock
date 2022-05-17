const React = require('react')
const ReactDOM = require('react-dom')

const Clock = require('./clock.jsx')

ReactDOM.render(
  <Clock />,
  document.getElementById('content')
)