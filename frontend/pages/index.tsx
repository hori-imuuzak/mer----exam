import * as React from 'react'
import { connect } from 'react-redux'
import Head from 'next/head'
import numeral from 'numeral'
import HomePage from '../src/components/pages/Home'
import { actions as ItemActions } from '../src/modules/item'
import { actions as MasterActions } from '../src/modules/master'
import ItemResource from '../src/resources/item'
import MasterResource from '../src/resources/master'
import { Item, Category } from '../src/types'

interface Props {
  items: Array<Item>
  categories: Array<Category>
  selectedCategoryId: number
}
class Home extends React.Component<Props> {
  static async getInitialProps({ reduxStore }) {
    const items = await ItemResource.getItems()
    reduxStore.dispatch(ItemActions.setList(reduxStore.dispatch, items))

    const categories = await MasterResource.getCategories()
    reduxStore.dispatch(MasterActions.setCategories(reduxStore.dispatch, categories))

    return {
      selectedCategoryId: ((categories || { data: [] }).data[0] || { id: undefined }).id
    }
  }

  constructor(props: Props) {
    super(props)

    this.state = {
      selectedCategoryId: props.selectedCategoryId
    }
  }

  state: {
    selectedCategoryId: number
  }

  onClickCategory = (id: number) => {
    this.setState({ selectedCategoryId: id })
  }

  render() {
    const { categories, items } = this.props
    const { selectedCategoryId } = this.state

    return (
      <div>
        <Head>
          <title>商品一覧</title>
        </Head>
        <HomePage
          categories={categories}
          selectedCategoryId={selectedCategoryId}
          onClickCategory={this.onClickCategory}
          items={items.map(item => ({
            href: `/items/${item.id}`,
            imgUrl: item.image,
            title: item.name,
            price: `¥${numeral(item.price).format('0,0')}`,
            likeCount: item.like_count,
            isSoldOut: item.is_sold_out
          }))}
        />
      </div>
    )
  }
}

export default connect(
  state => ({
    items: state.item.list.data,
    categories: state.master.categories.data
  }),
  dispatch => ({})
)(Home)
