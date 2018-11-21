import React from 'react'
import {Link} from 'react-router-dom'
import lodash from 'lodash'

import PropTypes from 'prop-types'
import {withStyles} from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'

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
  state = {
    
    id: '',
    cat_id: '',
    content: '',
    created_at: '',
    keyword: '',
    updated_at: ''
  }

  componentDidMount () {
    // this.setState(this.props.log)
    console.log('dailyBox')
    console.log(console.log(this.props.logs))
    // this.displayLogs()
  }


  // displayLogs () {
  //   this.setState(this.props.log)
  // }

  render () {
    return (
      <React.Fragment>
        <Card className='dailyBox'>
        
        {this.props.logs.map(aLog => {
          console.log('box')
          console.log(aLog)
          let upperKey = lodash.upperCase(aLog.keyword)
          return <React.Fragment>
            <CardActionArea>
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
              {`*${upperKey}`}
              </Typography>
              </CardContent>
          </CardActionArea>
        </React.Fragment>
        })}
            
      <CardActionArea>
        {/* <CardMedia
          image="idontknew.jpg"
          title="Daily Pic"
        /> */}
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
          
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
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
