import * as React from 'react'
import styled from 'styled-components'
import Text from '../atoms/Text'
import { dimens, zindexes, colors, fontsizes } from '../../style'

interface Props {
  price: string
  shippingFee: string
  onClickPurchase: Function
}

export default ({ price, shippingFee, onClickPurchase }: Props) => (
  <Container>
    <Price>
      <Text fontsize={fontsizes.size5} color={colors.white}>
        {price}
      </Text>
      <Text
        fontsize={fontsizes.size2}
        color={colors.white}
        marginStyle={`${dimens.space(1)}px 0 0 ${dimens.space(1)}px`}
      >
        {shippingFee}
      </Text>
    </Price>
    <Button onClick={() => onClickPurchase()}>購入手続きへ</Button>
  </Container>
)

const Container = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 60px;
  background: ${colors.brown};
  z-index: ${zindexes.topmost};
  display: flex;
`
const Price = styled.div`
  display: flex;
  padding: ${dimens.space(1)}px;
  flex: 2;
  align-items: center;
`
const Button = styled.button`
  margin: ${dimens.space(1)}px;
  background: ${colors.red};
  font-size: ${fontsizes.size3}px;
  outline: none;
  border: none;
  color: ${colors.white};
  corsur: pointer;
  flex: 1.5;
  border-radius: 2px;
`
