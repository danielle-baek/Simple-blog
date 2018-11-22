import React from 'react'
import {Link} from 'react-router-dom'
import lodash from 'lodash'

// import PropTypes from 'prop-types'
import {withStyles} from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'

// import DisplayLog from './DisplayLog'

import * as api from '../api'

const styles = {
  card: {
    maxWidth: 345,
    display: 'flex'
  },
  media: {
    height: 140,
    objectFit: 'cover'
  },
  cover: {
    width: 151,
  }
}

class DailyBox extends React.Component {
  state = {
    
    id: '',
    cat_id: '',
    content: '',
    created_at: '',
    keyword: '',
    updated_at: '',
    image: 'https://boygeniusreport.files.wordpress.com/2016/11/puppy-dog.jpg?quality=98&strip=all&w=782'
  }

  // componentDidMount () {
  //   // console.log('dailyBox')
  //   // console.log(console.log(this.props.logs))
  // }

  render () {
    const {classes} = this.props
    return (
      <React.Fragment>
        <Card classes={{cover: classes.cover}}>
        <CardActionArea>
        <CardMedia
        className={classes.cover}
        image={this.state.image}
        title="Image"
      />
        </CardActionArea>
        
        {this.props.logs.map(aLog => {
          // console.log('box')
          // console.log(aLog)
          let upperKey = lodash.upperCase(aLog.keyword)
          return <React.Fragment>
            <CardActionArea>
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
              {`* ${upperKey}`}
              </Typography>
              </CardContent>

          </CardActionArea>
        </React.Fragment>
        })}
            
      
        
      {/* <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button> */}
      {/* </CardActions> */}
    </Card>
        {/* <div className='dailyBox'>
          <p>{this.state.id}</p>
          <p>{this.state.keyword}</p>
          <p>{this.state.content}</p>
          <p>{this.state.created_at}</p>
          <p>{this.state.id}</p>
        </div> */}
      </React.Fragment>
    )
  }
}

export default withStyles(styles, { withTheme: true })(DailyBox);
