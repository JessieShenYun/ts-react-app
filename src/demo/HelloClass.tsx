import React from 'react'
import { Button } from 'antd'

interface Greeting {
  name: string
  // firstName: string
  // lastName: string
}
interface State {
  count: number
}

export default class HelloClass extends React.Component<Greeting, State> {
  state: State = {
    count: 0,
  }

  render() {
    return (
      <>
        <p>你点击了 {this.state.count} 次</p>
        <Button onClick={() => { this.setState({ count: this.state.count + 1 }) }}>{this.props.name}</Button>
      </>)
  }
}
