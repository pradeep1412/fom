import { createTheme, darken } from '@mui/material/';
import { grey, red } from '@mui/material/colors';

export const theme = createTheme({
  palette: {
    primary: {
      main: `#fac564`,
      contrastText: `#fff`,
      dark: `#f1c064`,
    },
    secondary: {
      main: `#5e72e4`,
      contrastText: `#fff`,
      dark: `#5668d1`,
    },
    success: {
      main: `#3cf48b`,
    },
    info: {
      main: `#1c92ec`,
    },
    warning: {
      main: `#f4a460`,
    },
  },
  typography: {
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    button: {
      fontSize: `1rem`,
      textTransform: `capitalize`,
      color: `#ffff`,
    },
  },
  overrides: {
    MuiButton: {
      root: {
        borderRadius: 30,
      },
    },
  },
  custom: {
    colorVariables: {
      light: `#9e9e9e`,
      blue: `#f4a460`,
      default: `#172b4d`,
      white: `#f7fafc`,
      dark: `#212121`,
      darker: darken(grey[900], 0.5),
      danger: red[500],
      indigo: `#5e72e4`,
      purple: `#8965e0`,
      pink: `#f3a4b5`,
      red: `#f5365c`,
      orange: `#fb6340`,
      yellow: `#ffd600`,
      green: `#2dce89`,
      teal: `#11cdef`,
      cyan: `#2bffcb`,
    },
  },
});
