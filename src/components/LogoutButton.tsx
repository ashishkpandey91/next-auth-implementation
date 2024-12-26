"use client";

import { signOut } from "next-auth/react";

const LogoutButton = () => {
  const handleLogout = () => {
    signOut({
      callbackUrl: "/", // Redirect URL after logging out
    });
  };

  return <button onClick={handleLogout}>Logout</button>;
};

export default LogoutButton;
