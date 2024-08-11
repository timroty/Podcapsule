import * as React from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Container from '@mui/material/Container'
import Button from '@mui/material/Button'
import Link from 'next/link'
import { supabase } from '../../lib/initSupabase'
import { useRouter } from 'next/router'

const pages = ['Account', 'Podcasts']
const pageRoutes = ['/account', '/favorited-podcasts']

export default function ResponsiveAppBar () {
  const router = useRouter()

  return (
    <AppBar position="static" style={{ background: '#01357b' }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{ flexGrow: 0 }} style={{ marginRight: '15px' }}>
            <img src="/Podcapsule-no-bg.png" width="50px" alt="Podcapsule Logo" />
          </Box>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'flex' } }}>
            {pages.map((page, index) => (
              <Link href={pageRoutes[index]} key={index} style={{ textDecoration: 'none' }}>
                <Button sx={{ my: 2, color: 'white', display: 'block', marginRight: '5px', textTransform: 'capitalize' }}>
                  {page}
                </Button>
              </Link>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Button
              type="outline"
              onClick={() => {
                supabase.auth.signOut()
                router.push('/')
              }}
              sx={{ my: 2, color: 'white', display: 'block', textTransform: 'capitalize' }}
            >
              Log out
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  )
}
