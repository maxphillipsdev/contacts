import { extendTheme } from '@chakra-ui/react'
import foundations from './foundations'

// Cursed typescript bullshittery below, please look away.
let betterExtendTheme: any;
betterExtendTheme = extendTheme;

const direction = 'ltr'

const config = {
  useSystemColorMode: false,
  initialColorMode: 'dark',
  cssVarPrefix: 'chakra',
}

export const theme = {
  direction,
  ...foundations,
  config,
}

export default betterExtendTheme(theme)
