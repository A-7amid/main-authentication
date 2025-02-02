export const login = (email: string, password: string): User | null => {
  const user = users.find(user => user.email === email.toLowerCase() && user.password === password);
  return user || null;
}

export type User = {
  id: string;
  email: string;
  password: string;
  displayName: string;
  role: 'admin' | 'user';
  token?: string;
}

export const users: User[] = [
  {
    id: '0',
    email: 'admin@example.com',
    password: 'admin',
    displayName: 'Admin',
    role: 'admin',
    token: 'admin'
  },
  {
    id: '1',
    email: 'john@example.com',
    password: 'password123',
    displayName: 'John Doe',
    role: 'admin',
    token: 'abc123'
  },
  {
    id: '2',
    email: 'jane@example.com',
    password: 'password456',
    displayName: 'Jane Smith',
    role: 'user',
    token: 'def456'
  },
  {
    id: '3',
    email: 'bob@example.com',
    password: 'password789',
    displayName: 'Bob Wilson',
    role: 'user',
    token: 'ghi789'
  }
]