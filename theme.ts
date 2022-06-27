import { extendTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

export default extendTheme({
  initialColorMode: 'light',
  styles: {
    global: (props: any) => ({
      "html,body,#__next": {
        w: "100%",
        h: "100%",
        minW: '320px'
      },
      body: {
        py: 10,
      },
    }),
  },
});
