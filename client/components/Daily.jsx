import React from 'react'
import {Button} from 'semantic-ui-react'
import {Link} from 'react-router-dom'

export default class Daily extends React.Component {
  render () {
    return (
      <React.Fragment>
        <Link to="/create/normal">
          <Button >
            <p>Create Blog</p>
          </Button>
        </Link>
      </React.Fragment>
    )
  }
}
