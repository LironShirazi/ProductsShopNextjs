/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
