import * as React from 'react'
import styled from 'styled-components'
import Image from '../atoms/Image'
import Const from '../../const'
import { dimens, colors } from '../../style'

const ICON_SIZE = '26px'
export default () => (
  <Container>
    <Drawer>
      <Image src="/static/assets/drawer.svg" alt="" width={ICON_SIZE} height={ICON_SIZE} />
    </Drawer>
    <Search>検索窓</Search>
    <Menu>
      <Image src="/static/assets/bell.svg" alt="" width={ICON_SIZE} height={ICON_SIZE} />
      &nbsp;&nbsp;
      <Image src="/static/assets/checkmark.svg" alt="" width={ICON_SIZE} height={ICON_SIZE} />
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
const Drawer = styled.div`
  flex: 0.5;
  text-align: left;
`
const Menu = styled.div`
  flex: 1;
  text-align: right;
`
const Search = styled.div`
  flex: 3;
  white-space: nowrap;
  overflow: hidden;
`
