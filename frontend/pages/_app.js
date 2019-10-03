/* eslint-disable max-len */
/* eslint-disable react/no-danger */
import App from 'next/app';
import { ThemeProvider } from 'styled-components';

import theme from '../styles/theme.style';

export class MyApp extends App {
  render() {
    console.log('_app render', new Date().getMilliseconds());

    // console.log('_app props: ', Object.keys(this.props));
    // console.log('_app props.apolloState: ', this.props.apolloState);

    // const cache = this.props.apollo.cache.extract();
    // console.log('apollo cache: ', cache);

    // pageProps includes data returned from getInitialProps

    const { Component, pageProps } = this.props;

    return (
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    );
  }
}

// For FOUC issue, see _document.js
if (typeof window !== 'undefined') {
  window.addEventListener('DOMContentLoaded', () => {
    document.getElementById('holderStyle').remove();
  });
}

export default MyApp;
