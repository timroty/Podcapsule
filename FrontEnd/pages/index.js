import React from 'react'
import Link from 'next/link'
import Button from '@mui/material/Button'
import { Container, Grid, Typography } from '@mui/material'
import styles from '../styles/module/index.module.css'

const Home = () => {
  return (
    <>
      <Container maxWidth="md" className={styles.container}>
        <Grid container rowSpacing={1} className={styles.grid} columnSpacing={{ xs: 0, sm: 0, md: 0 }}>
          <Grid item md={4} sm={6} xs={12}>
            <img src="/Podcapsule.png" width="250px" className={styles.logo} alt="Podcapsule Logo" />
          </Grid>
          <Grid item md={8} sm={6} xs={12}>
            <Typography variant="h1" fontSize='48px' fontWeight='medium' className={styles.heading}>
              PodCapsule
            </Typography>
            <Typography variant="subtitle1" className={styles.subtitle}>
              Your podcast RSS feed time capsule
            </Typography>
          </Grid>
        </Grid>
        <Link href="/sign-in">
          <Button variant="outlined" className={styles.button}>
            Sign In
          </Button>
        </Link>
        <div className={styles['text-container']}>
          <Typography variant="h5" className={styles.text}>
            What Is PodCapsule?
          </Typography>
          <Typography variant="body1" className={styles.text}>
            Discover new episodes from your favorite podcasts with PodCapsule! Each day, PodCapsule adds a new episode from one of your favorited podcasts to a custom RSS feed. Catch up on episodes you missed or revisit the best ones from the past. Let PodCapsule make sure you never fall behind!
          </Typography>
        </div>
        <div className={styles['text-container']}>
          <Typography variant="h5" className={styles.text}>
            Getting Started
          </Typography>
          <Typography variant="body1" className={styles.text}>
            To start using PodCapsule:
          </Typography>
          <Typography variant="body1" className={styles.text}>
            1. Sign up for a free account on the <a className={styles.link} href="/sign-in">sign-in page</a>.
          </Typography>
          <Typography variant="body1" className={styles.text}>
            2. Favorite a couple of podcasts by searching and clicking on the add button next to their name.
          </Typography>
          <Typography variant="body1" className={styles.text}>
            3. After favoriting your podcasts, copy your custom RSS link for your PodCapsule feed.
          </Typography>
          <Typography variant="body1" className={styles.text}>
            4. Open your favorite podcast player and find the option to add a new podcast by RSS feed URL. If you need help, follow this <a className={styles.link} href="https://medium.com/@joshmuccio/how-to-manually-add-a-rss-feed-to-your-podcast-app-on-desktop-ios-android-478d197a3770">Medium article</a>.
          </Typography>
          <Typography variant="body1" className={styles.text}>
            5. Paste in the PodCapsule feed link and voila! You&apos;ll start receiving a new PodCapsule episode in your player every day.
          </Typography>
          <Typography variant="body1" className={styles.text}>
            Note: PodCapsule is not compatible with Spotify since Spotify does not support adding shows by URLs.
          </Typography>
        </div>
        <div className={styles['text-container']}>
          <Typography variant="h5" className={styles.text}>
            Contact Us
          </Typography>
          <Typography variant="body1" className={styles.text}>
            For support or inquiries, contact us at: <a className={styles.link} href="mailto:podcapsuleapp@gmail.com">podcapsuleapp@gmail.com</a>
          </Typography>
        </div>
      </Container>
    </>
  )
}

export default Home
