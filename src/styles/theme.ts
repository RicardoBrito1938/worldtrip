import {extendTheme} from '@chakra-ui/react'

export const theme = extendTheme({
  colors: {
    gray : {
      "100": '#DADADA',
      "600": '#47585B'
    },
    yellow : {
      "500": '#FFBA08'
    }
  },
  fonts : {
    heading: "Poppins",
    body: "Poppins"
  },
  styles: {
    global : {
      body : {
        bg: '#F5F8FA',
        color: '#47585B'
      }
    }
  }
})
