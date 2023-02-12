import { useState } from "react";
import React from "react";

const Login = () => {
  const [error, setError] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const logindata = (event) => {
    event.preventDefault();
    
  };
  return (
    <div>
        <form action="">

      <div>
        <input
          type="email"
          name="email"
          id="email"
          value={email}
          onChange={(event)=>{ setEmail(event.target.value)}}
          placeholder="Email"
        />
      </div>
      <div>
        <input
          type="password"
          name="password"
          id="password"
          value={password}
          onChange={(event)=>{ setPassword(event.target.value)}}
          placeholder="Password"
        />
      </div>

      <div>
        <button type="submit">LogIn</button>
      </div>
        </form>
    </div>
  );
};

export default Login;
