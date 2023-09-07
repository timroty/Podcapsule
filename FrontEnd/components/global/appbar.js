import * as React from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import Button from '@mui/material/Button'
import Link from 'next/link'
import { supabase } from '../../lib/initSupabase'
import { useRouter } from 'next/router'

const pages = []
const pageRoutes = ['Profile', '/favorited-podcasts']

export default function ResponsiveAppBar() {
  const router = useRouter()

  return (
    <AppBar position="static" style={{ background: '#01357b' }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{ flexGrow: 0 }}>
            <Typography
              variant="h6"
              noWrap
              sx={{
                mr: 2,
                display: { xs: 'flex', md: 'flex' },
                fontWeight: 500,
                color: 'inherit'
              }}
            >
              PodCapsule
            </Typography>
          </Box>

          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page, index) => (
              <Link href={pageRoutes[index]} key={index} style={{ textDecoration: 'none' }}>
                <Button sx={{ my: 2, color: 'white', display: 'block' }}>
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
              sx={{ my: 2, color: 'white', display: 'block' }}
            >
              Log out
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  )
}
