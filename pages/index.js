import { useState } from "react";

export default function Home() {
  const [data, setData] = useState({ username: '', password: '' });
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
    // if (!res.ok) throw Error(json.message);
    console.log(json);
  };

  return (
    <section>
      <h1>Welcome back</h1>
      <p>Welcome back Please enter your details</p>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">username</label>
          <input 
          onChange={handleChanges}
          type="text" id="username" name="username" value={data.username} />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input 
          onChange={handleChanges}
          type="password" id="password" name="password" value={data.password} />
        </div>
        <button 
        onSubmit={handleSubmit}
        type="submit">Sign In</button>
      </form>
    </section>
  )
}
