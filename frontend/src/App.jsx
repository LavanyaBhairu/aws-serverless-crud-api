import { useEffect, useState } from "react";
import "./App.css";

import { useAuth } from "react-oidc-context";
import Home from "./Home";

function App() {
  const auth = useAuth();

  const signOutRedirect = () => {
    const clientId = "5girm2o6s1sb0d3549jbhelaig";
    const logoutUri = "https://d1evhx1ksjluhk.cloudfront.net";
    const cognitoDomain = "https://ap-south-1hb5ztdzgh.auth.ap-south-1.amazoncognito.com";
    window.location.href = `${cognitoDomain}/logout?client_id=${clientId}&logout_uri=${encodeURIComponent(logoutUri)}`;
  };

  if (auth.isLoading) {
    return <div>Loading...</div>;
  }

  if (auth.error) {
    return <div>Encountering error... {auth.error.message}</div>;
  }

  if (auth.isAuthenticated) {
    return (
      <div>
          <button onClick={() => auth.removeUser()}>Sign out</button>
          <Home />
      </div>
    );
  }

  return (
    <div>
      <button onClick={() => auth.signinRedirect()}>Sign in</button>
      <button onClick={() => signOutRedirect()}>Sign out</button>
    </div>
  );
}

export default App;