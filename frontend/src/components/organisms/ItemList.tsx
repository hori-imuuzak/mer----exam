import * as React from 'react'
import styled from 'styled-components'
import Item, { Props as ItemInterface } from '../molecules/Item'

interface Props {
  items: Array<ItemInterface>
}

export default ({ items }: Props) => (
  <Container>
    {(items || []).map((item, i) => (
      <Item key={`items_list_child_${i}`} {...item} />
    ))}
  </Container>
)

const Container = styled.div`
  max-width: 320px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  align-content: space-around;
  justify-content: space-around;
`
