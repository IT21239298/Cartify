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
          <button
            type="submit"
            className="btn btn-block"
            onClick={handleSubmit}
          >
            Submit
          </button>
        </div>
      </form>
    </section>
  );
}

export default LoginForm;
