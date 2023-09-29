import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import { getDataTo, setDataTo } from "../function/function.js";

import { isEmail } from "./const/const";

function Signup() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    mode: "onBlur",
  });

  const navigate = useNavigate();
  const [error, setError] = useState(false);

  const onSubmit = (data) => {
    const dataStorage = JSON.parse(getDataTo("users"));
    if (dataStorage === null) {
      setDataTo("users", [data]);
    } else {
      if (dataStorage.find((item) => item.email === data.email)) {
        setError(true);
        return;
      }
      setDataTo("users", [...dataStorage, data]);
    }
    navigate("/signin");
  };

  return (
    <div className="main">
      <div className="main__signin">
        <form onSubmit={handleSubmit(onSubmit)} className="signin">
          <h5 className="signin__title">Sign up</h5>

          <label htmlFor="signupEmail">E-mail</label>
          <input
            {...register("email", {
              required: "This field cannot be empty",
              pattern: {
                value: isEmail,
                message: "Email is not valid",
              },
            })}
            id="signupEmail"
            type="text"
            placeholder="Your email"
          />

          {errors?.email && <p className="errors">{errors?.email?.message}</p>}
          {error && <p className="errors">This email already exists</p>}

          <label htmlFor="signupLogin">Login</label>
          <input
            {...register("login", {
              required: "This field cannot be empty",
              minLength: {
                value: 5,
                message: "Login is too short",
              },
            })}
            id="signupLogin"
            type="text"
            placeholder="Your login"
          />

          {errors?.login && <p className="errors"> {errors?.login?.message}</p>}

          <label htmlFor="signupPassword">Password</label>
          <input
            {...register("password", {
              required: " This field cannot be empty",
              minLength: {
                value: 5,
                message: "Password is too short",
              },
            })}
            id="signupPassword"
            type="password"
            placeholder="Your password"
          />

          {errors?.password && (
            <p className="errors"> {errors?.password?.message}</p>
          )}

          <button className="signin__btn" type="submit">
            Sign up
          </button>
        </form>
      </div>
    </div>
  );
}

export default Signup;
