import React from 'react'
import {HashRouter as Router, Route, Link} from 'react-router-dom'
import Button from '@material-ui/core/Button'
import {connect} from 'react-redux'

import Daily from './Daily'
import Create from './Create'
import Normal from './Normal'
import Header from './Header'

import {setCategory} from '../actions/action'

import * as api from '../api'

class App extends React.Component {
  state = {
    categories:[]
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
        this.setCategoryReducer()
      })
      .catch((err) => { console.log(err) 
      this.setState({categories:err})})
  }

  setCategoryReducer() {
    this.props.dispatch(setCategory(this.state.categories))
  }

  render () {
    return (
      <Router>
        <div>
          <Header/>
          <Button
            className='btn'
            variant="contained"
            color="primary"
            size="Large"
            component={Link}
            to='/create/'>
            <p>Create Blog</p>
          </Button>
          <div className='container'>
            <Route exact path='/' component={Daily} />
            <Route path='/create/' component={Create} />
            <Route path='/create/cat_id=:id/normal/' component={Normal} />
            {/* <Route path='/create/image/' component={Normal} /> */}
            <Route path='/create/cat_id=:id/image/normal/' component={Normal} />
          </div>
        </div>
      </Router>
    )
  }
}

export default connect()(App)
