import React from 'react'

export default class Create extends React.Component {
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
      <div>
        <form>
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
        </form>
      </div>
    )
  }
}
