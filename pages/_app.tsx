import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ApolloClient, InMemoryCache, ApolloProvider, HttpLink } from '@apollo/client';

//HttpLink above from https://brianlovin.com/writing/cookies-authenticate-next-js-apollo-graphql-requests  
//...after static generation, need a pre-populated ApolloProvider cache to have access to the mutation and query hooks that come w/ @apollo/client
//..after page renders, it needs to kick off a query to determine the viewer and progressively disclose things
//..need to instantiate an ApolloClient during build time in getStaticProps
/** 
const endpoint = `http://localhost:3000/api/graphql`;
const link = new HttpLink({ uri: endpoint });
const cache = new InMemoryCache();
export async function getStaticApolloClient() {
  return new ApolloClient({
    link,
    cache,
  });
}
*/


//https://www.apollographql.com/blog/apollo-client/next-js/next-js-getting-started/  ...goes over Static/SSR/client side grapql
//connect our to api @  
//alternative uri: http://localhost:3001/graphql    https://countries.trevorblades.com
const client = new ApolloClient({
  uri: 'http://localhost:3001/graphql',
  //uri: 'https://countries.trevorblades.com',  //used for https://www.apollographql.com/blog/apollo-client/next-js/next-js-getting-started/
  cache: new InMemoryCache()
});

//ApolloProvider is a React component for client-side graphql data retrieval after page renders
//connect client to our app with ApolloProvider.. wrapping our app inside an ApolloProvider
function MyApp({ Component, pageProps }: AppProps) {
  return ( 
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
}

export default MyApp;
