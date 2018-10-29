import * as React from 'react'
import styled from 'styled-components'
import ExhibitButton from '../atoms/ExhibitButton'
import HomeHeader from '../organisms/HomeHeader'
import ItemList from '../organisms/ItemList'
import CategorySelect, { HEIGHT as CATEGORY_HEIGHT } from '../organisms/CategorySelect'
import { zindexes, colors } from '../../style'
import Const from '../../const'

export interface Props {
  categories: Array<{
    id: number
    name: string
  }>
  selectedCategoryId: number
  onClickCategory: Function
  items: Array<{
    href: string
    imgUrl: string
    title: string
    price: string
    isSoldOut: boolean
    likeCount: number
  }>
}
export default ({ categories, selectedCategoryId, onClickCategory, items }: Props) => (
  <Container>
    <HeaderSection>
      <HomeHeader />
    </HeaderSection>
    <CategorySection>
      <CategorySelect
        categories={categories}
        selectedCategoryId={selectedCategoryId}
        onClickCategory={id => onClickCategory(id)}
      />
    </CategorySection>
    <ItemListSection>
      <ItemList items={items} />
    </ItemListSection>
    <ExhibitButton onClick={() => {}} />
  </Container>
)

const Container = styled.div`
  background: ${colors.gray1};
  width: 100%;
  min-height: 100vh;
  padding-bottom: 120px;
`
const HeaderSection = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  height: ${Const.Size.HeaderHeight}px;
  z-index: ${zindexes.topmost};
`
const CategorySection = styled.div`
  position: fixed;
  top: ${Const.Size.HeaderHeight}px;
  width: 100%;
  height: ${CATEGORY_HEIGHT}px;
  z-index: ${zindexes.topmost};
`
const ItemListSection = styled.div`
  margin-top: ${Const.Size.HeaderHeight + CATEGORY_HEIGHT}px;
`
