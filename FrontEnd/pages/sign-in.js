import { Auth, Card, Typography, Space, Button, Icon } from '@supabase/ui'
import { supabase } from '../lib/initSupabase'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

const Index = () => {
  const [authView, setAuthView] = useState('sign_in')
  const router = useRouter();

  const userAccessToken = supabase.auth.session()?.access_token;
    if (userAccessToken){
      {router.push('/favorited-podcasts')}}

  useEffect(() => {
    const { data: authListener } = supabase.auth.onAuthStateChange(
      (event, session) => {
        if (event === 'PASSWORD_RECOVERY') setAuthView('update_password')
        if (event === 'USER_UPDATED')
          setTimeout(() => setAuthView('sign_in'), 1000)
        if (event === 'SIGNED_IN')
          router.push('/favorited-podcasts')
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

    // Ugly, but the Supabase auth view not allowing override
    const mainEl = document.querySelector('main');
    if (mainEl)
      mainEl.classList.remove('dark');

    return () => {
      authListener.unsubscribe()
    }
  }, [])

  const View = () => {
    const cardStyle = {
      maxWidth: '420px',
      margin: '96px auto',
      padding: '24px',
      backgroundColor: '#FFFFFF',
      borderRadius: '10px',
      boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.25)',
    };

    const imgStyle = {
      width: '112px',
    };
  
    const textContainerStyle = {
      textAlign: 'center',
      margin: '0 auto',
    };
  
    const textStyle = {
      fontFamily: '"Roboto","Helvetica","Arial",sans-serif',
      fontSize: '14px',
      color: 'rgba(75,85,99,0.80)',
      textAlign: 'center',
    };
  
    return (
      <>
        {authView === 'update_password' ? (
          <div style={cardStyle}>
            <Auth.UpdatePassword supabaseClient={supabase} />
          </div>
        ) : (
          <div style={cardStyle}>
            <div style={textContainerStyle}>
              <img src="https://app.supabase.io/img/supabase-light.svg" style={imgStyle} />
            </div>
            <Auth
              supabaseClient={supabase}
              providers={[]}
              view={authView}
              socialLayout="horizontal"
              socialButtonSize="xlarge"
              style={{ fontFamily:'"Roboto","Helvetica","Arial",sans-serif' }}
            />
            <p style={textStyle}>
              Please note that emails from PodCapsule may occasionally be flagged as spam by your email provider.
            </p>
          </div>
        )}
      </>
    );
  };
  
  return <div>{<View />}</div>;
}

export default Index
