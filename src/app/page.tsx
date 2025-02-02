'use client';

import { useAuth } from "@/contexts/auth.context";

const Home = () => {
  const { user } = useAuth();

  return (
    <div>
      <h1>Welcome to the Home Page, You are logged in</h1>
      <p>User: {user?.displayName}</p>
    </div>
  );
}

export default Home;
