import { AppProps } from "next/app"
import { QueryClient, QueryClientProvider } from "react-query"
import { ChakraProvider } from "@chakra-ui/react"
import { theme } from "../styles/theme"
import { SidebarDrawerProvider } from "../contexts/SidebarDrawerContext"
import { makeServer } from "../services/mirage";

if (process.env.NODE_ENV === "development") {
  makeServer();
}

const client = new QueryClient();

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={client}>
      <ChakraProvider theme={theme}>
        <SidebarDrawerProvider>
          <Component {...pageProps} />
        </SidebarDrawerProvider>
      </ChakraProvider>
    </QueryClientProvider>
  )
}

export default MyApp
