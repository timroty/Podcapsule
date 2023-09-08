import React from 'react'
import { Auth } from '@supabase/ui'
import { supabase } from '../lib/initSupabase'
import Head from 'next/head'
import Script from 'next/script'

export default function MyApp ({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/Podcapsule.png" />
      </Head>
      <Script strategy="afterInteractive" src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}/>
      <Script
        id='google-analytics'
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}', {
              page_path: window.location.pathname,
            });
          `
        }}
      />
      <main>
        <Auth.UserContextProvider supabaseClient={supabase}>
          <Component {...pageProps} />
        </Auth.UserContextProvider>
      </main>
    </>
  )
}
