'use client';

import { useAuth } from "@/contexts/auth.context";

const LoginPage = () => {
  const { handleLogin } = useAuth();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);

    handleLogin(formData.get('email') as string, formData.get('password') as string);
  }

  return (
    <form className="space-y-3 w-1/2 mx-auto" onSubmit={handleSubmit}>
      <div className="flex-1 rounded-lg bg-gray-50 px-6 pb-4 pt-8">
        <h1 className='mb-3 text-2xl text-center font-bold'>
          Login
        </h1>
        <div>
          <label
            className="mb-3 mt-5 block text-xs font-medium text-gray-900"
            htmlFor="email"
          >
            Email
          </label>
          <div className="relative">
            <input
              className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-4 text-sm outline-2 placeholder:text-gray-500"
              type="email"
              name="email"
              placeholder="Enter your email address"
              required
            />
          </div>
        </div>
        <div className="mt-4">
          <label
            className="mb-3 mt-5 block text-xs font-medium text-gray-900"
            htmlFor="password"
          >
            Password
          </label>
          <div className="relative">
            <input
              className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-4 text-sm outline-2 placeholder:text-gray-500"
              type="password"
              name="password"
              placeholder="Enter password"
              required
            />
          </div>
        </div>
      </div>
      <button className="mt-4 w-full bg-blue-500 text-white p-2 rounded-md">
        Log in
      </button>
      <button className="mt-4 w-full bg-red-500 text-white p-2 rounded-md" onClick={() => handleLogin('admin@example.com', 'admin')} >
        Log in as admin
      </button>
    </form>
  )
}

export default LoginPage