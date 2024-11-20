import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

const Login = () => {
  const { userLogin, createUserWithGoogle } = useContext(AuthContext);

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);

    // user sign in
    userLogin(email, password)
      .then((res) => {
        console.log(res.user);
        alert("user sign in");
        e.target.reset()
      })
      .catch((error) => {
        console.log("ERROR", error.message);
      });
  };

  const handleGoogleSignIn = () => {
    createUserWithGoogle()
      .then((result) => {
        console.log("User create with google sign in", result.user);
      })
      .catch((error) => {
        console.log("ERROR", error.message);
      });
  };

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col">
        <div className="text-center">
          <h1 className="text-xl font-bold">Login now!</h1>
        </div>
        <div className="card bg-base-100 shrink-0 shadow-2xl">
          <form onSubmit={handleLogin} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
          </form>
          <p className="mb-3 mx-3">
            Don't have an account? Please{" "}
            <Link to="/register" className="text-blue-500 font-bold">
              Register
            </Link>
          </p>
          <p>
            <button onClick={handleGoogleSignIn} className="btn btn-accent">
              Sign in With GOOGLE
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
