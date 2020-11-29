import React from 'react'
import HelloClass from './HelloClass'

interface Greeting {
  name: string
  // firstName: string
  // lastName: string
}
interface Loading {
  loading: boolean
}

function HelloHoc<P>(WrapperComponent: React.ComponentType<P>) {
  return class extends React.Component<P & Loading> {
    render() {
      let { loading, ...props} = this.props

      return loading ? <div>loading...</div> : <WrapperComponent {...props as P} />
    }
  }
}

export default HelloHoc(HelloClass)