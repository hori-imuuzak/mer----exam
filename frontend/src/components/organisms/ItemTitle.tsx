import * as React from 'react'
import styled from 'styled-components'
import Text from '../atoms/Text'
import IconButton from '../atoms/IconButton'
import { dimens, colors, fontsizes } from '../../style'

interface Props {
  title: string
  likeCount: number
  commentCount: number
}

export default ({ title, likeCount, commentCount }: Props) => (
  <Container>
    <Text fontsize={fontsizes.size4} color={colors.black}>
      {title}
    </Text>
    <Operations>
      <IconButtonContainer>
        <IconButton icon="/static/assets/heart.png" text="いいね！" count={likeCount} />
      </IconButtonContainer>
      <IconButtonContainer>
        <IconButton icon="/static/assets/baloon.png" text="コメント" count={commentCount} />
      </IconButtonContainer>
      <ReportContainer>
        <IconButton icon="/static/assets/flag.svg" />
      </ReportContainer>
    </Operations>
  </Container>
)

const Container = styled.div`
  padding: ${dimens.space(1)}px ${dimens.space(3)}px;
  background: ${colors.white};
`
const Operations = styled.div`
  margin-top: ${dimens.space(4)}px;
  display: flex;
`
const IconButtonContainer = styled.div`
  &:not(:first-child) {
    margin-left: ${dimens.space(1)}px;
  }
`
const ReportContainer = styled.div`
  margin: 0 0 0 auto;
`
