import { extendTheme, Theme, theme } from "@chakra-ui/react";

const appTheme: Theme = {
  ...theme,
  styles: {
    global: {
      "html, body, #__next": {
        left: 0,
        top: 0,
        padding: 0,
        margin: 0,
        width: "100%",
        height: "100%",
      },
      "*": {
        boxSizing: "border-box",
      },
      a: {
        color: "inherit",
        textDecoration: "none",
      },
    },
  },
  fonts: {
    ...theme.fonts,
    body: `"system-ui",${theme.fonts.body}`,
    heading: `"system-ui",${theme.fonts.heading}`,
  },
  colors: {
    ...theme.colors,
  },
  config: {
    ...theme.config,
    useSystemColorMode: false,
    initialColorMode: "dark",
  },
};

export default extendTheme(appTheme);
