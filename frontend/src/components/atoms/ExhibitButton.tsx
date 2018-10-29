import * as React from 'react'
import styled from 'styled-components'
import Text from './Text'
import { zindexes, colors, dimens, fontsizes } from '../../style'

interface Props {
  onClick: Function
}

export default ({ onClick }: Props) => (
  <Button onClick={() => onClick()}>
    <Text fontsize={fontsizes.size4} color={colors.white} marginStyle={`${-dimens.space(2)}px 0 0 0`}>
      出品
    </Text>
    <CameraImage src="/static/assets/camera.svg" />
  </Button>
)

const Button = styled.button`
  position: fixed;
  text-align: center;
  right: ${-dimens.space(4)}px;
  bottom: ${-dimens.space(4)}px;
  width: 140px;
  height: 140px;
  border-radius: 50%;
  outline: 0;
  border: none;
  background: ${colors.red};
  z-index: ${zindexes.widget};
  cursor: pointer;
`
const CameraImage = styled.img`
  display: block;
  margin: 0 auto;
  width: 60px;
  height: 60px;
`
