import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

//connect our to api @  
//alternative uri: http://localhost:3001/graphql    https://countries.trevorblades.com
const client = new ApolloClient({
  uri: 'http://localhost:3001/graphql',
  cache: new InMemoryCache()
});

//connect client to our app with ApolloProvider.. wrapping our app inside an ApolloProvider
function MyApp({ Component, pageProps }: AppProps) {
  return ( 
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
}

export default MyApp;
