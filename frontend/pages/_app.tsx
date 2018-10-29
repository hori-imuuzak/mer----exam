import App, { Container } from 'next/app'
import React, { ReactNode } from 'react'
import withReduxStore from '../src/lib/with-redux-store'
import { Provider } from 'react-redux'

interface Props {
  Component: ReactNode
  pageProps: Object
  reduxStore: Object
}

class MyApp extends App<Props> {
  render() {
    const { Component, pageProps, reduxStore } = this.props
    return (
      <Container>
        <Provider store={reduxStore}>
          <Component {...pageProps} />
        </Provider>
      </Container>
    )
  }
}

export default withReduxStore(MyApp)
