import * as React from 'react'
import { supabase } from '../lib/initSupabase'
import { useEffect } from 'react'
import { Grid, Container, TextField } from '@mui/material'
import { useRouter } from 'next/router'
import ResponsiveAppBar from '../components/global/appbar'
import { Heading, SubHeading, Text, Divider } from '../styles/pages/account.styles'

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
        <Heading>
          Account
        </Heading>
        <Divider/>
        <SubHeading>
          Email
        </SubHeading>
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
        <Text>
          Member since: {new Date(user.created_at).toDateString()}
        </Text>
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
