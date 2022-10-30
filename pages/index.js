import { useState } from "react";

export default function Home() {
  const [data, setData] = useState({ username: '', password: '' });
  const handleChanges = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
    console.log(data);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(data);
  };

  return (
    <section>
      <h1>Welcome back</h1>
      <p>Welcome back Please enter your details</p>
      <form>
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
