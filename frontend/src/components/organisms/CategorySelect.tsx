import * as React from 'react'
import styled from 'styled-components'
import Text from '../atoms/Text'
import { dimens, colors } from '../../style'

interface Props {
  categories: Array<{
    id: number
    name: string
  }>
  selectedCategoryId: number
  onClickCategory: Function
}
export default ({ categories, selectedCategoryId, onClickCategory }: Props) => (
  <Container>
    <HScrollContent>
      {categories.map(category => (
        <Category key={`category_select_${category.id}`} onClick={() => onClickCategory(category.id)}>
          <Text color={category.id === selectedCategoryId ? colors.red : colors.gray2}>{category.name}</Text>
        </Category>
      ))}
    </HScrollContent>
  </Container>
)

export const HEIGHT = 32
const Container = styled.div`
  height: ${HEIGHT}px;
  background: ${colors.white};
  overflow-x: scroll;
  ::-webkit-toolbar {
    display: none;
  }
  -ms-overflow-style: none;
`
const HScrollContent = styled.div`
  width: 640px;
  height: 100%;
  display: table;
  margin: 0 auto;
`
const Category = styled.div`
  display: table-cell;
  vertical-align: middle;
  padding: 0 ${dimens.space(4)}px;
  cursor: pointer;
`
