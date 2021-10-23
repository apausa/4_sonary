import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

import LoginButton from './login/LoginButton';
import Favorites from './favorites/Favorites';
import User from './user/User';
import './profile.scss';

export default function Profile() {
  const { isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading ...</div>;
  }
  return (
    isAuthenticated
      ? (
        <main className="profile">
          <User />
          <Favorites />
        </main>
      )
      : (
        <main>
          <LoginButton />
        </main>
      )
  );
}
