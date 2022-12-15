import '../styles/globals.css'
import type { AppProps } from 'next/app'
import "../styles/globals.css";

import { store } from '../redux/store';
import { Toaster } from "react-hot-toast";
import { Provider } from 'react-redux';
function MyApp({ Component, pageProps }: AppProps) {
  return(
    //Higher order component
    <Provider store={store}>
    <Toaster />
    <Component {...pageProps} />
  </Provider>
)}

export default MyApp
