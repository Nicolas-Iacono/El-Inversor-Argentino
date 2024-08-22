import React from 'react'
import {Header} from './Header'
import {Footer} from './Footer'
import { Outlet } from 'react-router-dom'
import { Grid } from '@mui/material'

export const Layout = () => {
  return (
   <Grid sx={{}}>
    <Header/>
    <Outlet/>
    <Footer/>
   </Grid>
  )
}