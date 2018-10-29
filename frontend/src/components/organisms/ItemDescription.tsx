import * as React from 'react'
import styled from 'styled-components'
import Text from '../atoms/Text'
import { dimens, colors, fontsizes } from '../../style'

interface Props {
  description: string
}

export default ({ description }: Props) => (
  <React.Fragment>
    <Label>
      <Text fontsize={fontsizes.size3} color={colors.gray2}>
        商品の説明
      </Text>
    </Label>
    <Description>
      {description.split('\\n').map((text, i) => (
        <Text fontsize={fontsizes.size3} color={colors.black} key={`description_p_${i}`}>
          {text}
        </Text>
      ))}
    </Description>
  </React.Fragment>
)

const Label = styled.div`
  padding: ${dimens.space(1)}px ${dimens.space(3)}px;
`
const Description = styled.div`
  background: ${colors.white};
  padding: ${dimens.space(1)}px ${dimens.space(3)}px;
  min-height: 200px;
  p {
    line-height: 1.2em;
  }
`
