import React, { Fragment } from 'react'
import { Footer } from './footer'
import { Header } from './header'

function Layout(props) {
  return (
    <Fragment>
      <Header/>
        <div>{props.children}</div>
      <Footer/>
    </Fragment>
  )
}
export default Layout