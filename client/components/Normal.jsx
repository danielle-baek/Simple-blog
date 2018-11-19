import React from 'react'
import Button from '@material-ui/core/Button'
import {Link} from 'react-router-dom'

import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField'

import * as api from '../api'

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
  },
  dense: {
    marginTop: 19,
  },
  menu: {
    width: 200,
  },
})

export default class Normal extends React.Component {
  state = {
    cat_id:this.props.match.params.id,
    keyword:"",
    content:""
  }

  changeHandler = name => event => {
    this.setState({
      [name]: event.target.value,
    })
  }

  addLog = () => {
    console.log(this.state)
    api.appendLog(this.state)
      .then(console.log('id is: ' + this.state.cat_id))
      .catch(console.error)
  }

  render () {

    return (
      <React.Fragment>
        <form noValidate autoComplete="off">          
          <br /><br />
          <div className='writeBox'>
          <TextField
          id="standatd-name"
          label="Keyword"
          helperText="Keyword will be shown in the main page daily log block"
          value={this.state.keyword}
          onChange={this.changeHandler('keyword')}
          margin="normal"
          variant="outlined"
        />
        <TextField
          id="outlined-multiline-static-full-width"
          label="Content"
          placeholder="How was your day?"
          value={this.state.content}
          multiline
          rows="6"
          fullWidth
          onChange={this.changeHandler('content')}
          margin="normal"
          variant="outlined"
        />
          <br /><br />
          </div>

          <div className='submitBtn'>
            <Button 
            className='btn' 
            variant="contained" 
            color="primary" 
            size="Large"
            onClick={this.addLog}
            // component={Link}
            // to='/'
            >
              Create Log
            </Button>
          </div>
        </form>
      </React.Fragment>
    )
  }
}
