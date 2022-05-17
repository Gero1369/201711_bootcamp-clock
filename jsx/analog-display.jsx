const React = require('react')

const AnalogDisplay = function(props) {
  let date = new Date(props.time)
  let dialStyle = {
    position: 'relative',
    top: 2,
    left: '3%',
    width: 200,
    height: 200,
//    borderRadius: 20000,
    borderStyle: 'double',
    borderColor: 'white',
    backgroundColor: 'black',
    margin: 10
  }
  let secondHandStyle = {
    position: 'relative',
    top: 100,
    left: 100,
    border: '1px solid green',
    width: '40%',
    height: 1,
    transform: 'rotate(' + ((date.getSeconds()/60)*360 - 90 ).toString() + 'deg)',
    transformOrigin: '0% 0%',
    backgroundColor: 'green'
  }
  let minuteHandStyle = {
    position: 'relative',
    top: 100,
    left: 100,
    border: '3px solid #666',
    width: '40%',
    height: 3,
    transform: 'rotate(' + ((date.getMinutes()/60)*360 - 90 ).toString() + 'deg)',
    transformOrigin: '0% 0%',
    backgroundColor: 'blue'
  }
  let hourHandStyle = {
    position: 'relative',
    top: 84,
    left: 100,
    border: '2px solid white',
    width: '20%',
    height: 7,
    transform: 'rotate(' + ((date.getHours()/12)*360 - 90 ).toString() + 'deg)',
    transformOrigin: '0% 0%',
    backgroundColor: 'transparent'
  }
  let twelveStyle = {
    position: 'absolute',
    top: 4,
    left: 96,
    border: '2px solid white',
    width: 8,
    height: 8,
    backgroundColor: 'red'
  }
  let threeStyle = {
    position: 'absolute',
    top: 96,
    left: 186,
    border: '2px solid white',
    width: 8,
    height: 8,
    backgroundColor: 'red'
  }
  let sixStyle = {
    position: 'absolute',
    top: 186,
    left: 96,
    border: '2px solid white',
    width: 8,
    height: 8,
    backgroundColor: 'red'
  }
  let nineStyle = {
    position: 'absolute',
    top: 96,
    left: 4,
    border: '2px solid white',
    width: 8,
    height: 8,
    backgroundColor: 'red'
  }
  return <div>
    <div style={dialStyle}>
      <div style={twelveStyle}/>
      <div style={threeStyle}/>
      <div style={sixStyle}/>
      <div style={nineStyle}/>
      <div style={secondHandStyle}/>
      <div style={minuteHandStyle}/>
      <div style={hourHandStyle}/>
    </div>
  </div>
}

module.exports = AnalogDisplay