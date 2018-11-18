import React from 'react'
import PropTypes from 'prop-types'
import {withStyles} from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import {Link} from 'react-router-dom'

import * as api from '../api'

const styles = {
  card: {
    maxWidth: 345
  },
  media: {
    height: 140
  }
}

export default class DailyBox extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      id: '',
      cat_id: '',
      content: '',
      created_at: '',
      keyword: '',
      updated_at: ''
    }
  }

  componentDidMount () {
    this.setState(this.props.log)
    console.log('dailyBox')
    console.log(this.state)
    // this.displayLogs()
  }

  displayLogs () {
    this.setState(this.props)
  }

  render () {
    return (
      <React.Fragment>
        <div className='dailyBox'>
          <p>{this.state.id}</p>
          <p>{this.state.keyword}</p>
          <p>{this.state.content}</p>
          <p>{this.state.created_at}</p>
          <p>{this.state.id}</p>
        </div>
      </React.Fragment>
    )
  }
}
