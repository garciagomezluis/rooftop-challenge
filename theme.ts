import { extendTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

export default extendTheme({
  styles: {
    global: (props: any) => ({
      "html,body,#__next": {
        w: "100%",
        h: "100%",
      },
      body: {
        py: 10,
        bg: mode(
          "linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(197,174,223,1) 100%)",
          "black"
        )(props),
      },
    }),
  },
});
