import React from 'react'
import {Button} from 'semantic-ui-react'
import {Link} from 'react-router-dom'
import lodash from 'lodash'
import Category from './CategoryButton'
import {connect} from 'react-redux'


import * as api from '../api'

//const catnames = ['My Day', 'Meditation', 'Happy Things', 'Image']


class Create extends React.Component {
  state = {
    category_id: '',
    category: ''
  }

  // componentDidMount () {
  //   console.log('reducerCat')
  //   console.log(this.props.categories)
  //   this.getAllCategories()
  // }

  // getAllCategories() {
  //   api.getCategories()
  //     .then(categories => {
  //       this.setState({categories})
  //       console.log('create')
  //       console.log(this.state.categories)
  //     })
  //     .catch((err) => { console.log(err) 
  //     this.setState={categories:err}})
  // }

  changeHandler = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  

  render () {
    return (
      <React.Fragment>
        <h3>Category</h3>
        {this.props.categories.map(cat => {
          return <Category category={cat} />
        })}

      </React.Fragment>
    )
  }
}

function mapStateToProps(state) {
  return {
    categories: state.categories
  }
}

export default connect(mapStateToProps)(Create)
