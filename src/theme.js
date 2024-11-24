import { createTheme } from "@mui/material";

const headingFontWeight = 300,
headingMargin = '1rem 0'

export const theme = createTheme({
  typography: {
    h1: {
      fontSize: "3rem",
      margin: headingMargin,
      fontWeight: headingFontWeight,
    },
    h2: {
      fontSize: "2rem",
      margin: headingMargin,
      fontWeight: headingFontWeight,
    },
    h3: {
      fontSize: "1.8rem",
      margin: headingMargin,
      fontWeight: headingFontWeight,
    },
    h4: {
      fontSize: "1.6rem",
      margin: headingMargin,
      fontWeight: headingFontWeight,
    },
    h5: {
      fontSize: "1.4rem",
      margin: headingMargin,
      fontWeight: headingFontWeight,
    },
    h6: {
      fontSize: "1.2rem",
      margin: headingMargin,
      fontWeight: headingFontWeight,
    }
  }
})