import * as React from 'react'
import styled from 'styled-components'

interface HelloProps {
  greeting: string
}

export default class Hello extends React.Component<HelloProps> {
  render() {
    const { greeting } = this.props
    return <Title>{greeting}</Title>
  }
}

const Title = styled.h1`
  color: red;
`
