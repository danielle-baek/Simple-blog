import React from 'react'
import DailyBox from './DailyBox'

// import {Button} from 'semantic-ui-react'
// import {Link} from 'react-router-dom'

import * as api from '../api'

export default class Daily extends React.Component {
  state = {
    logs:[],
    dailyList:{}
  }

  componentDidMount () {
    this.getAllLogs()
    // this.getDaily()
  }

  // gets all logs from the database
  getAllLogs () {
    api.getLogs()
      .then(logs => {
        this.setState({logs})
        console.log('getLogs')
        console.log(this.state.logs)
      })
      .then (() => {this.getDaily()}
        
      )
      .catch((err) => { console.log(err) 
      this.setState={logs:err}})
  }

  // sort logs into new array depends on it's date
  getDaily() {
    let dailyList = {}
    this.state.logs.map(aLog => {      
      const date = aLog.created_at.slice(0,10) //gets only date
      if (!dailyList[date]) {
        dailyList[date] = []
      }
      dailyList[date].push(aLog) //add each log into dailyList
    })
    
    this.setState({dailyList})
    console.log('dailyList')
    console.log(this.state.dailyList)
  }

  render () {
    return (
      <React.Fragment>
        {
          (Object.keys(this.state.dailyList)).reverse().map(date => {
          const logList = this.state.dailyList[date]
          return (
            <React.Fragment>
            <h3>{date}</h3>
            <DailyBox logs={logList} />
            <br/>
            </React.Fragment>
          )
        })}
      </React.Fragment>
    )
  }
}
