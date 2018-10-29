import * as React from 'react'
import styled from 'styled-components'
import Image from '../atoms/Image'
import SoldOutLabel from '../atoms/SoldOutLabel'
import ItemHeader from '../organisms/ItemHeader'
import ItemTitle from '../organisms/ItemTitle'
import ItemDescription from '../organisms/ItemDescription'
import Purchase from '../organisms/Purchase'
import { dimens, zindexes, colors } from '../../style'
import Const from '../../const'

interface Props {
  name: string
  image: string
  description: string
  price: string
  likeCount: number
  commentCount: number
  shippingFee: string
  isSoldOut: boolean
  onClickBack: Function
}

export default ({
  name,
  image,
  description,
  price,
  likeCount,
  commentCount,
  shippingFee,
  isSoldOut,
  onClickBack
}: Props) => (
  <Container>
    <HeaderSection>
      <ItemHeader title={name} onClickBack={() => onClickBack()} />
    </HeaderSection>
    <Detail>
      {isSoldOut && <SoldOutLabel />}
      <Image src={image} alt={name} width="100%" height="320px" />
      <ItemTitle title={name} likeCount={likeCount} commentCount={commentCount} />
      <DescriptionSection>
        <ItemDescription description={description} />
      </DescriptionSection>
      <Purchase price={price} shippingFee={shippingFee} onClickPurchase={() => {}} />
    </Detail>
  </Container>
)

const Container = styled.div`
  background: ${colors.gray1};
  width: 100%;
  min-height: 100vh;
`
const HeaderSection = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  height: ${Const.Size.HeaderHeight}px;
  z-index: ${zindexes.topmost};
`
const Detail = styled.div`
  position: relative;
  margin-top: ${Const.Size.HeaderHeight}px;
`
const DescriptionSection = styled.div`
  margin-top: ${dimens.space(2)}px;
`
