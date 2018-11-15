import React from 'react'
import DailyBox from './DailyBox'

// import {Button} from 'semantic-ui-react'
// import {Link} from 'react-router-dom'

import * as api from '../api'

export default class Daily extends React.Component {
  state = {
    logs:[]
  }

  componentDidMount () {
    this.getAllLogs()
  }

  getAllLogs () {
    api.getLogs()
      .then(logs => {
        this.setState({logs})
        console.log('daily')
        console.log(this.state.logs)
      })
      .catch((err) => { console.log(err) 
      this.setState={logs:err}})
  }

  render () {
    return (
      <React.Fragment>
      <div className='daily'>
        {this.state.logs.map(aLog => {
          return <DailyBox log={aLog} />
        })}
        
        </div>
      </React.Fragment>
    )
  }
}
