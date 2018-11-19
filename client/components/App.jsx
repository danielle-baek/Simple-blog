import React from 'react'
import {HashRouter as Router, Route, Link} from 'react-router-dom'
import Button from '@material-ui/core/Button'

import Daily from './Daily'
import Create from './Create'
import Normal from './Normal'
import Header from './Header'

// import * as api from '../api'

const App = () => {
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

export default App
