import React from 'react'
import App from 'next/app'
import {
  Avatar,
  AppBar,
  CssBaseline,
  Grid,
  Hidden,
  IconButton,
  Link,
  Toolbar,
  Tooltip,
  Typography,
} from '@material-ui/core'
import { Menu as MenuIcon, Notifications as NotificationsIcon } from '@material-ui/icons'

class MyApp extends App {
  static async getInitialProps(appContext) {
    const appProps = await App.getInitialProps(appContext)
    return { ...appProps }
  }

  render() {
    const { Component, pageProps } = this.props
    return (
      <>
        <CssBaseline />
        <AppBar color="primary" position="sticky" elevation={0}>
          <Toolbar>
            <Grid container spacing={1} alignItems="center">
              <Hidden smUp>
                <Grid item>
                  <IconButton color="inherit" aria-label="open drawer">
                    <MenuIcon />
                  </IconButton>
                </Grid>
              </Hidden>
              <Grid item xs />
              <Grid item>
                <Link href="#" variant="body2">
                  Go to docs
                </Link>
              </Grid>
              <Grid item>
                <Tooltip title="Alerts • No alerts">
                  <IconButton color="inherit">
                    <NotificationsIcon />
                  </IconButton>
                </Tooltip>
              </Grid>
              <Grid item>
                <IconButton color="inherit">
                  <Avatar src="/static/images/avatar/1.jpg" alt="My Avatar" />
                </IconButton>
              </Grid>
            </Grid>
          </Toolbar>
        </AppBar>
        <Component {...pageProps} />
      </>
    )
  }
}

export default MyApp
