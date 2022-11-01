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
      localStorage.setItem('user', JSON.stringify({ user: data.username, status: true }));
      router.push('/images');
    }
    if (!res.ok) setMessage(json.message);
  };

  return (
    <div className="lg:flex lg:items-center lg:justify-center w-full lg:h-screen lg:-z-50 lg:bg-gradient-to-b lg:from-gray-400 lg:via-gray-300 lg:to-gray-200">
      <section className="relative flex mx-auto w-full xl:w-9/12 lg:h-[80vh]">
        <aside className="p-5 flex flex-col space-y-6 items-center justify-center min-h-[70vh] w-full lg:w-1/2 lg:bg-white">
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
              type="submit">
              Sign in
            </button>
          </form>
        </aside>
        <aside
          className="bg-no-repeat bg-cover lg:-z-0 -z-50 absolute w-full h-screen lg:h-[80vh] inset-0 lg:w-1/2 lg:relative lg:flex lg:flex-col space-y-2 items-center justify-end pb-20 bg-loginImg">
          <div className="w-full h-full bg-gradient-to-b from-slate-300 via-slate-400 lg:hidden" />
          <div className="w-5/6 px-4 py-6 hidden lg:flex flex-col space-y-3 items-center justify-center bg-white bg-opacity-20 backdrop-blur-md border">
            <q 
            className="text-lg font-medium text-white tracking-wide">
              Welcome to image gallery. Creativity is nothing but a mind set free
            </q>
            <p className="text-sm font-medium text-white tracking-wide self-end">- Torrie T. Asai</p>
          </div>
        </aside>
      </section>
    </div>
  )
}
