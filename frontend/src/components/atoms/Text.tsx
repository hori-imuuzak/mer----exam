import * as React from 'react'
import styled, { css } from 'styled-components'
import { fontsizes, colors } from '../../style'

interface Props {
  fontsize?: number
  color?: string
  bold?: boolean
  marginStyle?: string
  nowrap?: boolean
  children: React.ReactNode
}

export default (props: Props) => <Text {...props}>{props.children}</Text>

const Text = styled.p`
  ${(props: Props) => css`
    font-size: ${props.fontsize || fontsizes.size3}px;
    color: ${props.color || colors.black};
    font-weight: ${props.bold ? 'bold' : 'normal'};
    ${props.marginStyle &&
      `
      margin: ${props.marginStyle};
    `} ${props.nowrap &&
      `
      white-space: nowrap;
    `};
  `};
`
