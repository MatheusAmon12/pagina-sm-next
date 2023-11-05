import App from 'next/app'
import Head from 'next/head'
import { CssBaseline, ThemeProvider } from '@mui/material'
import { CacheProvider } from '@emotion/react'

import createEmotionCache from '../createEmotionCache'
import theme from '../src/theme'
 
export default function MyApp({ Component, pageProps }) {
  const cache = createEmotionCache()

  return (
    <>
      <Head>
        <title> Agência LM </title>
        <link rel="shortcut icon" href="/images/favicon.ico" type="image/x-icon" />
      </Head>
      <CssBaseline />
      <CacheProvider value={cache}>
          <ThemeProvider theme={theme}>
              <Component {...pageProps} />
          </ThemeProvider>
      </CacheProvider>
    </>
  )
}
 
MyApp.getInitialProps = async (context) => {
  const ctx = await App.getInitialProps(context)
 
  return { ...ctx}
}