import React from 'react'
import {HashRouter as Router, Route, Link} from 'react-router-dom'
import {Button} from 'semantic-ui-react'

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
        <Link to="/create/normal">
          <Button >
            <p>Create Blog</p>
          </Button>
        </Link>
        <div className='container'>
          <Route exact path='/' component={Daily} />
          <Route path='/create/' component={Create} />
          <Route path='/create/normal' component={Normal} />
        </div>
      </div>
    </Router>
  )
}

export default App
