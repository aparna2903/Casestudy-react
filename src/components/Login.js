import React, { useState } from "react";

import axios from "axios";
import { useNavigate } from "react-router";

function Login() {
  const [email, setUsername] = useState("");
  const [password, setPassword] = useState("");

  let page = useNavigate();

  let submit = async () => {
    let login = { email, password };

    let res = await axios.post(
      "https://products-jwt.onrender.com/users/login",
      login
    );

    let data = JSON.stringify(res);
    localStorage.setItem("user.info", data);

    page("/link");
  };
  return (
    <div class="container">
      <label>Email</label>
      <input
        type="text"
        value={email}
        onChange={(e) => setUsername(e.target.value)}
      ></input>
      <label>Password</label>
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      ></input>

      <button onClick={submit}>Submit</button>
    </div>
  );
}

export default Login;
