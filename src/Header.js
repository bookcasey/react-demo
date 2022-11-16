import { useState } from 'react';

export default function Header({ loggedIn, toggleLoggedIn }) {
  return (
    <div>
      <button onClick={toggleLoggedIn}>
        {loggedIn ? "Log Out" : "Log In"}
      </button>
    </div>
  );
}