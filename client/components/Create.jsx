import React from 'react'
import {Button} from 'semantic-ui-react'
import {Link} from 'react-router-dom'
import lodash from 'lodash'

const catnames = ['My Day', 'Meditation', 'Happy Things', 'Image']


export default class Create extends React.Component {
  state = {
    category_id = ''
    category = ''
  }

  componentDidMount () {
    this.getAllCategories()
  }

  getAllCategories() {
    
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
          const snake_cat = lodash.snakeCase(cat)
          let categoryType
          if (snake_cat === 'image') {
            categoryType = snake_cat
          }
          else {
            categoryType = 'normal'
          }
          
          return (
          <Link to={`/create/${categoryType}`}>
            <Button className='btn'>
              <p>{cat}</p>
            </Button>
          </Link> 
          )
        })}        
      </div>
    )
  }
}
