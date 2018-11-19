import React from 'react'
import {Link} from 'react-router-dom'
import lodash from 'lodash'
import Button from '@material-ui/core/Button'

import * as api from '../api'

//const catnames = ['My Day', 'Meditation', 'Happy Things', 'Image']


export default class CategoryButton extends React.Component {
  state = {
    category:this.props.category,
    url:''
  }

  componentDidMount(){
    // console.log(this.state.category)
    this.getCategoryLink()
  }

  getCategoryLink(){
    const cat = this.state.category
    let url = '/create/'
    url += 'cat_id=' + cat.id + '/'
    if (cat.isImage) {
      url += 'image/'
    }
    if (cat.isText) {
      url += 'normal/'
    }
    
    this.setState({url})
  }

  render () {
    return (
      <React.Fragment>
        <Button 
        variant="contained" 
        color="default" 
        size="Large" 
        component={Link}
        to={this.state.url}
        >
        {this.state.category.name} 
        </Button>
        <span> </span>
      </React.Fragment>
      
    )
  }
}
