import React, { useState } from "react";

const Login = ({ handleLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // 2 way binding on form
  const submitHandler = (e) => {
    // prevent its default behaviore
    e.preventDefault();

    // call handlelogin functio which call from app.jsx file
    handleLogin(email, password);

    // now after submit form make fields empty
    setEmail("");
    setPassword("");
  };

  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <div className="border-2 rounded-xl border-emerald-600 p-20">
        <form
          onSubmit={(e) => {
            submitHandler(e);
          }}
          className="flex flex-col items-center justify-center"
        >
          <input
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            required
            className=" outline-none bg-transparent border-2 border-emerald-600 text-xl py-3 px-5 rounded-full placeholder:text-gray-400"
            type="Email"
            placeholder="Enter your Email: "
          />
          <input
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            required
            className=" outline-none bg-transparent border-2 border-emerald-600 text-xl py-3 px-5 rounded-full placeholder:text-gray-400 mt-5"
            type="password"
            placeholder="Enter your password: "
          />
          <button className="text-white border-none outline-none  bg-emerald-600 text-xl py-3 px-5 rounded-full placeholder:text-white mt-5 ">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
