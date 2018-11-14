import React from 'react'
import {Button} from 'semantic-ui-react'
import {Link} from 'react-router-dom'


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
          </div>
        </form>
      </React.Fragment>
    )
  }
}
