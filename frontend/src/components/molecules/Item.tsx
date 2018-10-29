import * as React from 'react'
import styled from 'styled-components'
import Image from '../atoms/Image'
import Text from '../atoms/Text'
import SoldOutLabel from '../atoms/SoldOutLabel'
import { colors, fontsizes, dimens } from '../../style'

export interface Props {
  href: string
  imgUrl: string
  title: string
  price: string
  likeCount: number
  isSoldOut?: boolean
}
export default ({ href, imgUrl, title, price, likeCount, isSoldOut }: Props) => (
  <Card href={href}>
    {isSoldOut && <SoldOutLabel />}
    {/* TODO Trimをatomsにする */}
    <ImageTrim>
      <TrimContainer>
        <Image src={imgUrl} alt={title} />
      </TrimContainer>
    </ImageTrim>
    <DescriptionContainer>
      <Description>
        <Text nowrap>{title}</Text>
        <Price>
          <Text fontsize={fontsizes.size3} bold>
            {price}
          </Text>
          {likeCount > 0 && (
            <Like>
              <Image src="/static/assets/heart.png" alt="" width="16px" height="16px" />
              <Text fontsize={fontsizes.size2} marginStyle={`0 0 0 ${dimens.space(1)}px`}>
                {likeCount}
              </Text>
            </Like>
          )}
        </Price>
      </Description>
    </DescriptionContainer>
  </Card>
)

const Card = styled.a`
  position: relative;
  display: block;
  max-width: ${160 - dimens.space(1)}px;
  background: ${colors.white};
  text-decoration: none;
  margin-bottom: ${dimens.space(1)}px;
`
const ImageTrim = styled.div`
  width: ${160 - dimens.space(1)}px;
  height: ${160 - dimens.space(1)}px;
  overflow: hidden;
  position: relative;
`
const TrimContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: auto;
`
const DescriptionContainer = styled.div`
  padding: ${dimens.space(1)}px;
`
const Description = styled.div`
  overflow: hidden;
`
const Price = styled.div`
  display: flex;
  align-items: center;
  margin-top: ${dimens.space(1)}px;
`
const Like = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: flex-end;
`
