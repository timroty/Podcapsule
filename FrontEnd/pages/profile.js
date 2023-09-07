import * as React from 'react'
import { supabase } from '../lib/initSupabase'
import { useEffect } from 'react'
import { Grid, Typography, Container, TextField } from '@mui/material'
import { useRouter } from 'next/router'
import ResponsiveAppBar from '../components/global/appbar'
import styles from '../styles/module/profile.module.css'

export default function Profile ({ user }) {
  const router = useRouter()

  useEffect(() => {
    const userAccessToken = supabase.auth.session()?.access_token
    if (!userAccessToken) {
      supabase.auth.signOut()
      router.push('/')
    }
  }, [])

  return (
    <>
      <ResponsiveAppBar></ResponsiveAppBar>
      <Container maxWidth="md">
        <Typography variant="h1" fontSize='24px' fontWeight='medium' className={styles.heading}>
          Profile
        </Typography>
        <Typography variant="subtitle1" className={styles.subtitle}>
          Email
        </Typography>
        <Grid item xs={8} align="center">
          <TextField
            hiddenLabel
            fullWidth
            id="standard-read-only-input"
            defaultValue={user.email}
            InputProps={{
              readOnly: true
            }}
            variant="filled"
            size="small"
          />
        </Grid>
        <Typography variant="subtitle1" className={styles.subtitle}>
          Member since: {new Date(user.created_at).toDateString()}
        </Typography>
      </Container>
    </>
  )
}

export async function getServerSideProps ({ req }) {
  const { user } = await supabase.auth.api.getUserByCookie(req)

  if (!user) {
    supabase.auth.signOut()
    // If no user, redirect to index.
    return { props: {}, redirect: { destination: '/', permanent: false } }
  }

  // If there is a user, return it.
  return { props: { user } }
}
