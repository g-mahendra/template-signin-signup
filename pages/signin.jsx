import React, { useState } from "react";
import Link from "next/link";

const topMessage = "SignIn Please...";
const emailProps = {
  label: "Your Email",
  placeHolder: "example@example.com",
  required: true,
};
const passwordProps = {
  label: "Your Password",
  placeHolder: "Enter your password",
  required: true,
};

const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const handleFormSubmit = (event) => {
    event.preventDefault();
    if (password.length < 6 || password.length > 10) {
      setPasswordError("Password length must be between 6 and 10");
      return;
    }
    // { Implement your form submit handler here. You are free to modify error handling }
    setEmail("");
    setPassword("");
  };

  const handleOnFocus = () => {
    setEmailError("");
    setPasswordError("");
  };

  return (
    <div className="flex flex-row justify-center items-center w-screen min-h-screen bg-teal-50 h-screen">
      <form
        onSubmit={handleFormSubmit}
        className="flex flex-col items-start justify-center bg-white p-5 space-y-4 shadow-2xl rounded-md w-4/5 md:w-1/5"
      >
        <h2 className="text-2xl font-bold">{topMessage}</h2>
        {emailError || passwordError ? (
          <div className="bg-red-100 p-2 w-full text-red-900 border-red-300 border-2 rounded">
            <p>
              {emailError}, {passwordError}
            </p>
          </div>
        ) : null}
        <label className="text-xl font-semibold" htmlFor="email">
          {emailProps.label}
        </label>
        <input
          onFocus={handleOnFocus}
          value={email}
          className="outline-teal-300 p-2 bg-teal-50 w-full"
          required={emailProps.required}
          placeholder={emailProps.placeHolder}
          type="email"
          id="email"
          onChange={(event) => setEmail(event.target.value)}
        />
        <label className="text-xl font-semibold" htmlFor="password">
          {passwordProps.label}
        </label>
        <input
          onFocus={handleOnFocus}
          value={password}
          className="outline-teal-300 p-2 bg-teal-50 w-full"
          required={passwordProps.required}
          placeholder={passwordProps.placeHolder}
          type="password"
          id="password"
          onChange={(event) => setPassword(event.target.value)}
        />
        <input
          className="bg-teal-300 p-1 w-1/2 hover:bg-teal-500 rounded hover:shadow-lg cursor-pointer"
          type="submit"
          value="Signin"
        />
        <Link href="/signup">
          <a className="text-teal-700 text-sm cursor-pointer">
            Don't have an account ? create one {`>`}
          </a>
        </Link>
      </form>
    </div>
  );
};

export default Signin;
