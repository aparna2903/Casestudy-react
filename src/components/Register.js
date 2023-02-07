import React, { useState } from "react";

import axios from "axios";
import { useNavigate } from "react-router";

function Register() {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");

  let page = useNavigate();

  let submit = async () => {
    let register = { fname, lname, email, password, role };

    let res = await axios.post(
      "https://products-jwt.onrender.com/users/register",
      register
    );

    let data = JSON.stringify(res);
    localStorage.setItem("user.info", data);

    page("/link");
  };
  return (
    <div>
      <label>First Name</label>
      <input
        type="text"
        value={fname}
        onChange={(e) => setFname(e.target.value)}
      ></input>
      <label>Last Name</label>
      <input
        type="text"
        value={lname}
        onChange={(e) => setLname(e.target.value)}
      ></input>
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

      <label>Role</label>
      <input
        type="text"
        value={role}
        onChange={(e) => setRole(e.target.value)}
      ></input>

      <button onClick={submit}>Submit</button>
    </div>
  );
}

export default Register;
