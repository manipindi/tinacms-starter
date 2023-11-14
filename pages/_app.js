import "@/styles/globals.css";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  // uri: "http://localhost:4001/graphql",
  uri: `https://content.tinajs.io/v1.22/content/0ad2b629-c4a9-42c8-9e42-b8816dbbecd0/github/main`,
  cache: new InMemoryCache(),
  mode: 'no-cors',
});

export default function App({ Component, pageProps }) {
  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
}
