import React from 'react'
import {Link} from 'react-router-dom'
import lodash from 'lodash'
import Button from '@material-ui/core/Button'
import { withStyles } from '@material-ui/core/styles';

import * as api from '../api'


const styles = {
  root: {
    background: '#2979ff',
    borderRadius: 3,
    border: 0,
    color: 'white',
    height: 48,
    padding: '0 30px',
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
  }
}

class CategoryButton extends React.Component {
  state = {
    category:this.props.category,
    url:''
  }

  componentDidMount(){
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
    const {classes} = this.props
    return (
      <React.Fragment>
        <Button 
        classes={{root: classes.root}}
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

export default withStyles(styles)(CategoryButton)
