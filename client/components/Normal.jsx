import React from 'react'
import Button from '@material-ui/core/Button'
import {Link} from 'react-router-dom'

import * as api from '../api'


export default class Normal extends React.Component {
  state = {
    keyword:"",
    content:""
  }

  changeHandler = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  addLog() {
    api.appendLog(this.state)
      .then(this.props)
  }

  render () {
    return (
      <React.Fragment>
        <form>          
          <br /><br />
          <div className='writeBox'>
          <input 
          className='input keyword' 
          type='text' 
          onChange={this.changeHandler} 
          value={this.state.keyword} 
          name='keyword' 
          placeholder='Enter keyword'
          />
          <br /><br />
          <input 
          className='input content' 
          type='text' 
          onChange={this.changeHandler} 
          value={this.state.content} 
          name='content' 
          placeholder='How was your day?' 
          />
          <br /><br />
          </div>
          <div className='submitBtn'>
            <Button 
            className='btn' 
            variant="contained" 
            color="primary" 
            size="Large"
            component={Link}
            to='/'>
              Create Log
            </Button>
          </div>
        </form>
      </React.Fragment>
    )
  }
}
