import React from 'react'
import { createTheme } from '@mui/material/styles'
import {
  Link as RouterLink,
  LinkProps as RouterLinkProps,
} from 'react-router-dom'
import { LinkProps } from '@mui/material/Link'
import { grey } from '@mui/material/colors'

const LinkBehavior = React.forwardRef<
  HTMLAnchorElement,
  Omit<RouterLinkProps, 'to'> & { href: RouterLinkProps['to'] }
>((props, ref) => {
  const { href, ...other } = props
  // Map href (MUI) -> to (react-router)
  return <RouterLink ref={ref} to={href} {...other} />
})

export default createTheme({
  typography: {
    fontFamily: ['Roboto', 'Helvetica', 'Arial', 'sans-serif'].join(', '),
  },
  components: {
    MuiLink: {
      defaultProps: {
        component: LinkBehavior,
      } as LinkProps,
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          color: 'white',
          '&.Mui-focused': {
            color: 'white',
          },
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          color: 'white',
          border: `1px solid transparent`,
          '&.Mui-focused': {
            border: `1px solid ${grey[500]}`,
          },
        },
      },
    },
  },
  palette: {
    mode: 'dark',
    primary: {
      main: '#0F092B',
      light: '#e7e5ee',
      contrastText: '#e7e5ee',
    },
    secondary: {
      main: '#78193B',
      dark: '#c5245e',
    },
    text: {
      primary: '#a4a4a4',
    },
    background: {
      default: '#0F092B',
      paper: '#262558',
    },
    info: {
      main: grey[900],
      contrastText: grey[100],
    },
  },
  breakpoints: {
    values: {
      xs: 320,
      sm: 384,
      md: 576,
      lg: 1024,
      xl: 1368,
    },
  },
})
