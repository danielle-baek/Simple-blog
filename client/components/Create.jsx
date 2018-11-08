import React from 'react'
import {Button} from 'semantic-ui-react'
import {Link} from 'react-router-dom'
import lodash from 'lodash'

const catnames = ['My Day', 'Meditation', 'Happy Things', 'Image']


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
        <h3>Category</h3>
        {catnames.map(cat => {
          let s_cat = lodash.snakeCase(cat)
          console.log(`/create/${s_cat}`);
          <Link to={`/create/${s_cat}`}>
            <Button className={`btn${s_cat}`}>
              <p>{cat}</p>
            </Button>
          </Link>
        {' '}
        })}
        
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
