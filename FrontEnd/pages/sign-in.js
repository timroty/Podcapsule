import React, { useEffect, useState } from 'react'
import { Auth } from '@supabase/ui'
import { supabase } from '../lib/initSupabase'
import { useRouter } from 'next/router'
import styles from '../styles/module/sign-in.module.css'

const Index = () => {
  const [authView, setAuthView] = useState('sign_in')
  const router = useRouter()

  const userAccessToken = supabase.auth.session()?.access_token
  if (userAccessToken) {
    router.push('/favorited-podcasts')
  }

  useEffect(() => {
    const { data: authListener } = supabase.auth.onAuthStateChange(
      (event, session) => {
        if (event === 'PASSWORD_RECOVERY') setAuthView('update_password')
        if (event === 'USER_UPDATED') { setTimeout(() => setAuthView('sign_in'), 1000) }
        if (event === 'SIGNED_IN') { router.push('/favorited-podcasts') }
        // Send session to /api/auth route to set the auth cookie.
        // NOTE: this is only needed if you're doing SSR (getServerSideProps)!
        fetch('/api/auth', {
          method: 'POST',
          headers: new Headers({ 'Content-Type': 'application/json' }),
          credentials: 'same-origin',
          body: JSON.stringify({ event, session })
        }).then((res) => res.json())
      }
    )

    // Ugly, but the Supabase auth view not allowing override
    const mainEl = document.querySelector('main')
    if (mainEl) { mainEl.classList.remove('dark') }

    return () => {
      authListener.unsubscribe()
    }
  }, [])

  const View = () => {
    return (
      <>
        {authView === 'update_password'
          ? (
            <div className={styles.card}>
              <Auth.UpdatePassword supabaseClient={supabase} />
            </div>
          )
          : (
            <div className={styles.card}>
              <div className={styles['text-container']}>
                <img src="https://app.supabase.io/img/supabase-light.svg" alt="Supabase Logo" className={styles.logo} />
              </div>
              <Auth
                supabaseClient={supabase}
                providers={[]}
                view={authView}
                socialLayout="horizontal"
                socialButtonSize="xlarge"
                style={{ fontFamily: '"Roboto","Helvetica","Arial",sans-serif' }}
              />
              <p className={styles.text}>
                Please note that emails from PodCapsule may occasionally be flagged as spam by your email provider.
              </p>
            </div>
          )}
      </>
    )
  }

  return <div>{<View />}</div>
}

export default Index
