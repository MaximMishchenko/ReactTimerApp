import React, { PropTypes } from 'react'

class Controls extends React.Component {
  static propTypes = {
    countdownStatus: PropTypes.string.isRequired
  }

  render(){
    let {countdownStatus} = this.props
    let renderStartStopButton = () => {
      if(countdownStatus === 'started'){
        return <button className="button secondary">Pause</button>
      } else if(countdownStatus === 'paused'){
        return <button className="button primary">Start</button>
      }
    }

    return(
      <div className="controls">
        {renderStartStopButton()}
        <button className="button alert hollow">Clear</button>
      </div>
    )
  }
}

export default Controls
