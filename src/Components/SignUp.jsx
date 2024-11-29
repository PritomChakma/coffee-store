import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";

const SignUp = () => {
  const { createUser } = useContext(AuthContext);

  const handlaLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    createUser(email, password)
      .then((result) => {
        console.log(result.user);
        const createdTime = result?.user?.metadata?.creationTime;

        const newUser = { name, email, createdTime };
        // set new user on Database
        fetch("http://localhost:5000/users", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(newUser),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log("User Create to DB", data);
          });
      })
      .catch((error) => {
        console.log("Error", error);
      });
  };
  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="card bg-base-100 w-full max-w-md shrink-0 rounded-none  border-2 p-7">
        <h2 className="font-semibold text-2xl text-center">
          SignUp an Account
        </h2>
        <form onSubmit={handlaLogin} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              name="name"
              type="text"
              placeholder="Your Name"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              name="email"
              type="email"
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
              name="password"
              type="password"
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
            <button className="btn btn-neutral bg-[#E3B577] text-black font-bold">
              Login
            </button>
          </div>
          <div className="form-control ">
            <button className="btn ">
              <span className="text-blue-500 font-bold text-lg"></span>
              Login with Google
            </button>
          </div>
        </form>
        <p className="font-semibold text-center">
          Don’t Have An Account ?
          <Link className="text-blue-500" to="/login">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
