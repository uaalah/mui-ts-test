import React from 'react'
import Box from '@mui/material/Box';
import { styled } from '@mui/system';
import Header from './Header';

const Wrapper = styled('div')(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
}))

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
    </>
  )
}

export default Layout;