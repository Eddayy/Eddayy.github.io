import Typography from 'typography'
import FairyGates from './customtheme'

const typography = new Typography(FairyGates)

if (process.env.NODE_ENV !== 'production') {
  typography.injectStyles()
}

export default typography
