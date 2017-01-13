import React from 'react'
import {
  Panel,
  Grid,
  Row,
  Col,
  Button,
  FormControl,
  ListGroup,
  ListGroupItem,
  Glyphicon
} from 'react-bootstrap'
import Toggle from 'react-toggle'
import classnames from 'classnames'

import 'react-toggle/style.css'
import style from './style.scss'

export default class Send extends React.Component {

  constructor() {
    super()
  }

  render() {

    return (
      <div className={style.conversation}>
        <h2>Send box</h2>
      </div>
    )
  }

}