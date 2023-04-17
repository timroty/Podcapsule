import { Auth } from '@supabase/ui'
import { supabase } from '../lib/initSupabase'
import Head from "next/head";

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/Podcapsule.png" />
      </Head>
      <main className={'dark'}>
      <Auth.UserContextProvider supabaseClient={supabase}>
        <Component {...pageProps} />
      </Auth.UserContextProvider>
    </main>
    </>
  )
}
