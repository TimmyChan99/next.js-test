import { useState } from "react";
import { useRouter } from 'next/router'

export default function Home() {
  const [data, setData] = useState({ username: '', password: '' });
  const [message, setMessage] = useState('');
  const router = useRouter()

  const handleChanges = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch('/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    const json = await res.json();

    if (json.status === 'success') {
      localStorage.setItem('user', JSON.stringify({ user: data.username, status: true}));
      router.push('/images');
    }
    if (!res.ok) setMessage(json.message);
  };

  return (
    <section className="relative">
      <aside className="p-5 flex flex-col space-y-5 items-center justify-center min-h-[70vh]">
         <div className="space-y-1 w-4/5 mx-auto">
           <h1 className="font-bold text-3xl tracking-wide text-gray-900">Welcome back</h1>
           <p className="text-gray-500 font-medium">Welcome back Please enter your details</p>
         </div>
          {message && <p className="text-rose-600 text-lg font-medium">{message}</p>}
          <form 
          className="flex flex-col w-4/5 mx-auto space-y-5"
          onSubmit={handleSubmit}>
            <div className="flex flex-col w-full space-y-2">
              <label 
              className="text-md font-bold text-slate-900 tracking-wide"
              htmlFor="username">Username</label>
              <input
              className="border border-gray-300 rounded-md p-2 placeholder:gray-500 placeholder:font-meduim"
              placeholder="Enter your username"
              onChange={handleChanges}
              type="text" id="username" name="username" value={data.username} />
            </div>
            <div className="flex flex-col w-full space-y-2">
              <label 
              className="text-md font-bold text-slate-900 tracking-wide"
              htmlFor="password">Password</label>
              <input
              className="border border-gray-300 rounded-md p-2 placeholder:gray-500 placeholder:font-meduim"
              placeholder="Enter your password"
              onChange={handleChanges}
              type="password" id="password" name="password" value={data.password} />
            </div>
            <button
            className="bg-slate-900 text-white font-bold py-2 px-4 rounded w-full"
            onSubmit={handleSubmit}
            type="submit">Sign in</button>
          </form>
      </aside>
        <aside className="-z-50 absolute w-full h-screen inset-0 flex flex-col space-y-2 items-center justify-center bg-loginImg">
          <div className="w-full h-full backdrop-opacity-50 bg-gradient-to-b from-slate-300 via-slate-400"/>
        </aside>
    </section>
  )
}
