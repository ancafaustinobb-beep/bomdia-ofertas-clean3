// pages/_app.js
import '../styles/globals.css'  // CSS global (crie a pasta styles se ainda não existir)

export default function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}
