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
          <input type='text' value={this.state.keyword} name='keyword' placeholder='Keyword'/>
          <input type='text' value={this.state.content} name='content' placeholder='How was your day?' />
        </form>
      </div>
    )
  }
}
