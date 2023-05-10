import { wrapper } from '@/redux/store'
import '@/styles/globals.css'
import 'react-toastify/dist/ReactToastify.css';

 function App({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default wrapper.withRedux(App)