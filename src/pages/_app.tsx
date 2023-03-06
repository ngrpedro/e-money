import DefaultLayout from '@/components/DefaultLayout'
import '@/styles/globals.ts'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <DefaultLayout>
      <Component {...pageProps} />
    </DefaultLayout>
  )
}
