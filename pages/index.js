import React, { Component } from "react"
import { Button } from "antd"

export default class Home extends Component {
  componentDidMount = () => {
    console.log(2233)
  }

  render() {
    return (
      <div>
        welcome to next.js
        <Button>antd</Button>
      </div>
    )
  }
}
