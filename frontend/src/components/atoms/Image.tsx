import * as React from 'react'
import styled, { css } from 'styled-components'

interface Props {
  src: string
  alt: string
  width?: string
  height?: string
}

export default (props: Props) => <Image {...props} />

const Image = styled.img`
  ${(props: Props) => css`
    width: ${props.width || 'auto'};
    height: ${props.height || 'auto'};
  `};
`
