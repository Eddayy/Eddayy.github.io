import Typography from "typography"
import GithubTheme from "typography-theme-fairy-gates"

const typography = new Typography(GithubTheme)

if (process.env.NODE_ENV !== 'production') {
  typography.injectStyles();
}

export default typography