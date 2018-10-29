import * as React from 'react'
import { initializeStore } from '../store'

const isSSR = typeof window === 'undefined'
const __REDUX_STORE__ = '__REDUX_STORE__'

function getOrCreateStore(initialState) {
  if (isSSR) {
    return initializeStore(initialState)
  }

  if (!window[__REDUX_STORE__]) {
    window[__REDUX_STORE__] = initializeStore(initialState)
  }
  return window[__REDUX_STORE__]
}

export default App => {
  return class AppWithRedux extends React.Component {
    static async getInitialProps(appContext) {
      const reduxStore = getOrCreateStore({})

      appContext.ctx.reduxStore = reduxStore

      let appProps = {}
      if (typeof App.getInitialProps === 'function') {
        appProps = await App.getInitialProps(appContext)
      }

      return {
        ...appProps,
        initialReduxState: reduxStore.getState()
      }
    }

    constructor(props) {
      super(props)
      this.reduxStore = getOrCreateStore(props.initialReduxState)
    }

    reduxStore: Object

    render() {
      return <App {...this.props} reduxStore={this.reduxStore} />
    }
  }
}
