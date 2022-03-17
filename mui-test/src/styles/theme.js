import { createTheme } from "@mui/system"
import { red } from "@mui/material/colors";

// export const theme = createTheme({
//   palette: {
//     mode: 'light',
//     primary: {
//       main: '#3f51b5',
//     },
//     secondary: {
//       main: '#f50057',
//     },
//     background: {
//       default: '#404040',
//     },
//   },
//   typography: {
//     fontFamily: '"Nunito", "Arial", sans-serif',
//     fontWeightLight: 700,
//     fontWeightRegular: 700,
//     fontWeightMedium: 700,
//     fontWeightBold: 700
//   }
// })

// export const testTheme = {
//   palette: {
//     primary: {
//       main: red[500],
//     },
//   },
// };

export const testTheme = {
  palette: {
    primary: {
      main: '#151515',
    },
    secondary: {
      main: '#ffcc00',
    },
    background: {
      default: '#404040',
      paper: '#dadada',
    },
  },
  typography: {
    fontFamily: '"Nunito", "Arial", sans-serif',
    fontWeightLight: 700,
    fontWeightRegular: 700,
    fontWeightMedium: 700,
    fontWeightBold: 700
  }
}

export const reset = {
  'html, body, div, span, applet, object, iframe, h1, h2, h3, h4, h5, h6, p, blockquote, pre, a, abbr, acronym, address, big, cite, code, del, dfn, em, img, ins, kbd, q, s, samp, small, strike, strong, sub, sup, tt, var, b, u, i, center, dl, dt, dd, ol, ul, li, fieldset, form, label, legend, table, caption, tbody, tfoot, thead, tr, th, td, article, aside, canvas, details, embed, figure, figcaption, footer, header, hgroup, menu, nav, output, ruby, section, summary, time, mark, audio, video': {
    margin: 0,
    padding: 0,
    border: 0,
    fontSize: '100%',
    font: 'inherit',
    verticalAlign: 'baseline',
  },
  'article, aside, details, figcaption, figure, footer, header, hgroup, menu, nav, section': {
    display: 'block'
  },
  body: {
    lineHeight: 1,
  },
  'ol, ul': {
    listStyle: 'none',
  },
  'blockquote, q': {
    quotes: 'none',
  },
  blockquote: {
    '&: before, &:after': {
      content: '',
      content: 'none',
    }
  },
  q: {
    '&: before, &:after': {
      content: '',
      content: 'none',
    }
  },
  table: {
    borderCollapse: 'collapse',
    borderSpacing: 0,
  },
  '*': {
    boxSizing: 'border-box',
  },
  '*:focus': {
    outline: 'none'
  },

  // personalización
  body: {
    backgroundColor: testTheme.palette.background.default,
    // backgroundColor: testTheme.palette.primary.main,
  }
}