import Link from 'next/link'
import useSWR from 'swr'
import { Auth, Card, Typography, Space, Button, Icon } from '@supabase/ui'
import { supabase } from '../lib/initSupabase'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

const Index = () => {
  const { user, session } = Auth.useUser()
  const [authView, setAuthView] = useState('sign_in')
  const router = useRouter();

  const fetcher = (url, token) =>
    fetch(url, {
      method: 'GET',
      headers: new Headers({ 'Content-Type': 'application/json', token }),
      credentials: 'same-origin',
    }).then((res) => {
      const userAccessToken = supabase.auth.session()?.access_token;
      if (userAccessToken){
        {router.push('/favorited-podcasts')}
      }})

  const { data, error } = useSWR(
    session ? ['/api/getUser', session.access_token] : null,
    fetcher
  )

  useEffect(() => {
    const { data: authListener } = supabase.auth.onAuthStateChange(
      (event, session) => {
        if (event === 'PASSWORD_RECOVERY') setAuthView('update_password')
        if (event === 'USER_UPDATED')
          setTimeout(() => setAuthView('sign_in'), 1000)
        // Send session to /api/auth route to set the auth cookie.
        // NOTE: this is only needed if you're doing SSR (getServerSideProps)!
        fetch('/api/auth', {
          method: 'POST',
          headers: new Headers({ 'Content-Type': 'application/json' }),
          credentials: 'same-origin',
          body: JSON.stringify({ event, session }),
        }).then((res) => res.json())
      }
    )

    return () => {
      authListener.unsubscribe()
    }
  }, [])

  const View = () => {
    return (
      <>
        {authView === 'update_password' ?
          <Space direction="vertical" size={6}>
            <Auth.UpdatePassword supabaseClient={supabase} />
          </Space>
        :
          <Space direction="vertical" size={8}>
            <div>
              <img
                src="https://app.supabase.io/img/supabase-dark.svg"
                width="96"
              />
              <Typography.Title level={3} style={{ fontFamily:'"Roboto","Helvetica","Arial",sans-serif' }}>
                PodCapsule Authentication by Supabase
              </Typography.Title>
            </div>
            <Auth
              supabaseClient={supabase}
              providers={[]}
              view={authView}
              socialLayout="horizontal"
              socialButtonSize="xlarge"
              style={{ fontFamily:'"Roboto","Helvetica","Arial",sans-serif' }}
            />
            <Typography.Text level={3} style={{ fontFamily:'"Roboto","Helvetica","Arial",sans-serif', textAlign:'center' }}>
              Please note that emails from PodCapsule may sometimes be flagged as spam by your email provider.
            </Typography.Text>
          </Space>
        }
      </>
    )
  }

  return (
    <div style={{ maxWidth: '420px', margin: '96px auto' }}>
      <Card>
        <View />
      </Card>
    </div>
  )
}

export default Index
