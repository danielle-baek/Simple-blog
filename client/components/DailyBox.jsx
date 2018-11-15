import React from 'react'
// import {Button} from 'semantic-ui-react'
// import {Link} from 'react-router-dom'

import * as api from '../api'

export default class DailyBox extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      id: '',
      cat_id: '',
      content: '',
      created_at: '',
      keyword: '',
      updated_at: ''
    }
  }

  componentDidMount () {
    this.setState(this.props.log)
    console.log('dailyBox')
    console.log(this.state)
    // this.displayLogs()
  }

  displayLogs () {
    this.setState(this.props)
  }

  render () {
    return (
      <React.Fragment>
        <div className='dailyBox'>
          <p>{this.state.id}</p>
          <p>{this.state.keyword}</p>
          <p>{this.state.content}</p>
          <p>{this.state.created_at}</p>
          <p>{this.state.id}</p>
        </div>
      </React.Fragment>
    )
  }
}
