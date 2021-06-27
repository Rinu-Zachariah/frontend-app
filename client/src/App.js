import React, { useState } from 'react';
import { Router } from "@reach/router";
import { ApolloProvider } from "@apollo/react-hooks";
import { ApolloClient, InMemoryCache, createHttpLink } from "@apollo/client";
import { setContext } from "apollo-link-context";

import MediaPlanPage from "./pages/index";
import Header from "./container/header/index";
import Sidebar from "./container/sidebar/index";

const httpLink = createHttpLink({
  uri:
    window._env_ !== undefined
      ? window._env_.REACT_APP_BACKEND_URL
      : "http://localhost:5000/graphql"
});

const authLink = setContext((_, { headers }) => {
  return {
    headers: {
      ...headers
    }
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache()
});

function App() {
  const [selectedTab, setSelectedTab] = useState("firstLi");
  return (
    <ApolloProvider client={client}>
      <Header />
      <Sidebar selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
      <MediaPlanPage selectedTab={selectedTab}/>
    </ApolloProvider>
  );
}


export default App;