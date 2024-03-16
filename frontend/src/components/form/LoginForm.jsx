import React from "react";

function LoginForm({ email, password, onChange, handleSubmit }) {
  return (
    <section className="form ">
      <form >
        <div className="form-group">
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            value={email}
            placeholder="Enter your email"
            onChange={onChange}
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            className="form-control"
            id="password"
            name="password"
            value={password}
            placeholder="Enter your password"
            onChange={onChange}
          />
        </div>

        <div className="form-group">
       
          <button className="w-full max-w-[150px] m-auto  bg-blue-600 hover:bg-blue-900 cursor-pointer  text-white text-xl font-medium text-center py-1 rounded-full mt-4"
          onClick={handleSubmit}>
            Login
          </button>
        </div>
      </form>
    </section>
  );
}

export default LoginForm;
