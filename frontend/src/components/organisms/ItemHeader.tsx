import * as React from 'react'
import styled from 'styled-components'
import Text from '../atoms/Text'
import Image from '../atoms/Image'
import Const from '../../const'
import { dimens, colors, fontsizes } from '../../style'

interface Props {
  title: string
  onClickBack: Function
}

const ICON_SIZE = '26px'
export default ({ title, onClickBack }: Props) => (
  <Container>
    <Back onClick={() => onClickBack()}>
      <Image src="/static/assets/arrow_left.svg" alt="" width={ICON_SIZE} height={ICON_SIZE} />
    </Back>
    <Title>
      <Text fontsize={fontsizes.size4} color={colors.black} bold>
        {title}
      </Text>
    </Title>
    <Menu>
      <Image src="/static/assets/search.svg" alt="" width={ICON_SIZE} height={ICON_SIZE} />
      &nbsp;&nbsp;
      <Image src="/static/assets/upload.svg" alt="" width={ICON_SIZE} height={ICON_SIZE} />
    </Menu>
  </Container>
)

const Container = styled.header`
  height: ${Const.Size.HeaderHeight}px;
  padding: 0 ${dimens.space(2)}px;
  background: ${colors.white};
  border-bottom: 1px solid ${colors.gray2};
  display: flex;
  align-items: center;
  justify-content: space-between;
`
const Back = styled.div`
  flex: 0.5;
  text-align: left;
`
const Menu = styled.div`
  flex: 1;
  text-align: right;
`
const Title = styled.div`
  flex: 3;
  white-space: nowrap;
  overflow: hidden;
`
