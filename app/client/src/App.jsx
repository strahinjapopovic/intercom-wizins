import './App.css';
import Header from './components/header';
import Footer from './components/footer';
import { Outlet } from 'react-router-dom';
import { onError } from '@apollo/client/link/error';
import { setContext } from '@apollo/client/link/context';
import { ApolloClient, InMemoryCache, ApolloProvider, HttpLink, from } from '@apollo/client';
//-------------------------------------------------------------------------//
// Construct our main GraphQL API endpoint
const httpLink = new HttpLink({ uri: '/graphql', });
//-------------------------------------------------------------------------//
const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors) {
    graphQLErrors.forEach(({ message, locations, path }) =>
      console.log(`[GraphQL error]: Message: ${message}, Path: ${path}`)
    );
  }
  if (networkError) {
    console.log(`[Network error]: ${networkError}`);
  }
});
//-------------------------------------------------------------------------//
// Construct request middleware that will attach the JWT token to every request as an `authorization` header
const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem('id_token');
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});
//-------------------------------------------------------------------------//
const client = new ApolloClient({
  // Set up our client to execute the `authLink` middleware prior to making the request to our GraphQL API
  link: from([errorLink, authLink, httpLink]),
  cache: new InMemoryCache(),
});
//-------------------------------------------------------------------------//
function App() {
  return (
    <ApolloProvider client={client}>
      <Header />
      <div id="format">
        <div id="container">
          <Outlet />
        </div>
      </div>
      <Footer />
    </ApolloProvider>
  );
}
//-------------------------------------------------------------------------//
export default App;
