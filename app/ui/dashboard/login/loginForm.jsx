"use client";
import { useState } from "react";
import style from "./loginForm.module.css";

const LoginForm = ({ authenticate }) => {
  const [err, setErr] = useState("");
  const onSubmit = async (formData) => {
    const result = await authenticate(formData);
    setErr(result);
  };
  return (
    <div className="w-1/4 space-y-3 _bgSoft px-3 py-10 rounded-lg text-center">
      <h1 className="text-2xl text-center">Login</h1>
      <form action={onSubmit} className={`${style.form} flex flex-col gap-5`}>
        <input type="text" placeholder="username" name="username" />
        <input type="password" placeholder="password" name="password" />
        <button type="submit" className="bg-purple-600 py-2 rounded-md">
          Login
        </button>
        {err && err}
      </form>
    </div>
  );
};

export default LoginForm;
