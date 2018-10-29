import * as React from 'react'
import styled from 'styled-components'
import { fontsizes, colors, dimens } from '../../style'

interface Props {
  icon: string
  text?: string
  count?: number
}

export default ({ icon, text, count }: Props) => (
  <Container>
    <Button isCircle={!text}>
      <Icon src={icon} alt="" />
      {text && (
        <Text>
          &nbsp;
          {text}
        </Text>
      )}
    </Button>
    {count && (
      <Count>
        &nbsp;
        {count}
      </Count>
    )}
  </Container>
)

const Container = styled.div`
  display: flex;
  align-items: center;
`
const Button = styled.div`
  background: ${colors.button};
  min-width: 20px;
  min-height: 20px;
  border-radius: 10px;
  cursor: pointer;
  outline: 0;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  ${(props: { isCircle: boolean }) =>
    !props.isCircle &&
    `
    padding: 0 ${dimens.space(1)}px;
  `};
`
const Text = styled.span`
  font-size: ${fontsizes.size2}px;
  color: ${colors.gray2};
`
const Count = styled.span`
  font-size: ${fontsizes.size2}px;
  color: ${colors.black};
  font-weight: bold;
`
const Icon = styled.img`
  width: 15px;
  height: 12px;
`
