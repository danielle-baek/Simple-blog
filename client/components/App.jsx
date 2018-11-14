import React from 'react'
import {HashRouter as Router, Route} from 'react-router-dom'

import Daily from './Daily'
import Create from './Create'
import Normal from './Normal'
import Header from './Header'

const App = () => {
  return (
    <Router>
      <div>
        <Header/>
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
