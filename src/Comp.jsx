import React, { Component } from 'react'

export default class Comp extends Component {
  render() {
    return (
      <div>
        <h1>Comp</h1>
        <h1>{this.props.name}</h1>
      </div>
    )
  }
}
