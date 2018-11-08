import React from 'react'
import {Button} from 'semantic-ui-react'
import {Link} from 'react-router-dom'


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
        <h4>Category</h4>
        <Link to="/create/normal">
          <Button className="btn1">
            <p>My Day</p>
          </Button>
        </Link>
        {' '}
        <Link to="/create/normal">
          <Button className="btn2">
            <p>Meditation</p>
          </Button>
        </Link>
        {' '}
        <Link to="/create/normal">
          <Button className="btn3">
            <p>Happy Things</p>
          </Button>
        </Link>
        
      </div>
    )
  }
}
