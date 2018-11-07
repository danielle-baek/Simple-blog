import React from 'react'
import {HashRouter as Router, Route} from 'react-router-dom'

import Daily from './Daily'
import Create from './Create'

const App = () => {
  return (
    <Router>
      <div>
        <h1>Simple Blog</h1>
        <div className='container'>
          <Route path='/' component={Daily} />
          <Route path='/create' component={Create} />
        </div>
      </div>
    </Router>
  )
}

export default App

