import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import Link from 'next/link'
import { supabase } from '../../lib/initSupabase'
import { useRouter } from 'next/router';


const pages = ['Profile', 'Podcasts'];
const pageRoutes = ['Profile', '/favorited-podcasts'];

export default function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const router = useRouter()

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
        <Box sx={{ flexGrow: 0 }}>
            <Typography
                variant="h6"
                noWrap
                sx={{
                mr: 2,
                display: { xs: 'flex', md: 'flex' },
                fontWeight: 700,
                color: 'inherit',
                }}
            >
                PodCapsule
            </Typography>
          </Box>
          
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page, index) => (
              <Link href={pageRoutes[index]} key={index} style = {{ textDecoration: 'none' }}>
                <Button
                    onClick={handleCloseNavMenu}
                    sx={{ my: 2, color: 'white', display: 'block' }}
                >
                    {page}
                </Button>
              </Link>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Button
                type="outline"
                onClick={() => {
                    supabase.auth.signOut();
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
  );
}
