import App from 'next/app'
import '../asset/css/styles.css'
import { theme } from '../asset/muliStyles/styles';
import { ThemeProvider } from '@mui/material/styles';
import Head from 'next/head';
import Layout from '../components/layouts';
export default class MyApp extends App {
  render () {
    const { Component, pageProps } = this.props
    return (
      <ThemeProvider theme={theme}>
        <Head>
          <title>Friends of Meditation</title>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
        <Layout>
          <Component {...pageProps} />
        </Layout>
    </ThemeProvider>
    )
  }
}
