import * as React from 'react'
import { supabase } from '../lib/initSupabase'
import { GetFavoritedPodcasts, DeleteFavoritedPodcasts } from '../services/accessor'
import { useState, useEffect } from 'react'
import { Grid, Typography, Container, TextField, Snackbar } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete'
import Button from '@mui/material/Button'
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline'
import { useRouter } from 'next/router'
import ResponsiveAppBar from '../components/global/appbar'
import MuiAlert from '@mui/material/Alert'
import jwtDecode from 'jwt-decode'
import styles from '../styles/module/profile.module.css'

export default function Profile({ user }) {

  useEffect(() => {
    const userAccessToken = supabase.auth.session()?.access_token
    if (userAccessToken) {
    } else {
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

export async function getServerSideProps({ req }) {
  const { user } = await supabase.auth.api.getUserByCookie(req)

  if (!user) {
    supabase.auth.signOut()
    // If no user, redirect to index.
    return { props: {}, redirect: { destination: '/', permanent: false } }
  }

  // If there is a user, return it.
  return { props: { user } }
}
