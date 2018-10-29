import * as React from 'react'
import { connect } from 'react-redux'
import Head from 'next/head'
import numeral from 'numeral'
import ItemDetailPage from '../src/components/pages/ItemDetail'
import { actions as ItemActions } from '../src/modules/item'
import ItemResource from '../src/resources/item'
import { Item } from '../src/types'

interface Props {
  item: Item
}
class ItemDetail extends React.Component<Props> {
  static async getInitialProps({ res, reduxStore, query }) {
    if (query.id) {
      // MEMO apiからNotFoundが返ってくることがなさそうなので、一旦チェックなし
      const detail = await ItemResource.getItem(query.id)
      reduxStore.dispatch(ItemActions.setDetail(reduxStore.dispatch, detail))

      return {}
    }

    res.writeHead(302, {
      Location: '/'
    })
    res.end()

    return {}
  }

  render() {
    const { item } = this.props

    return (
      <div>
        <Head>
          <title>{item.name}</title>
        </Head>
        <ItemDetailPage
          name={item.name}
          image={item.image}
          description={item.description}
          price={`¥${numeral(item.price).format('0,0')}`}
          likeCount={item.like_count}
          commentCount={item.comment_count}
          shippingFee={item.shipping_fee}
          isSoldOut={item.is_sold_out}
          onClickBack={() => window.history.back()}
        />
      </div>
    )
  }
}

export default connect(
  state => ({
    item: state.item.detail
  }),
  dispatch => ({})
)(ItemDetail)
