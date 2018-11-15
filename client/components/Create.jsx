import React from 'react'
import {Button} from 'semantic-ui-react'
import {Link} from 'react-router-dom'
import lodash from 'lodash'

import * as api from '../api'

const catnames = ['My Day', 'Meditation', 'Happy Things', 'Image']


export default class Create extends React.Component {
  state = {
    categories:[],
    category_id: '',
    category: ''
  }

  componentDidMount () {
    this.getAllCategories()
  }

  getAllCategories() {
    api.getCategories()
      .then(categories => {
        this.setState({categories})
        console.log('daily')
        console.log(this.state.categories)
      })
      .catch((err) => { console.log(err) 
      this.setState={categories:err}})
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
