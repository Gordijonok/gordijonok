import { useForm } from "react-hook-form";

import { useState } from "react";

import { useNavigate } from "react-router-dom";

import { useDispatch } from "react-redux";

import { addAllFavoriteMovies } from "../redux/favouriteFilmSlice.js";

import { LSkey, getDataFromLS, setDataToLS } from "../function/function";

import { isEmail } from "./const/const";

function Signin() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    mode: "onBlur",
  });
  const [error, setError] = useState({});
  const onSign = (data) => {
    const dataStorage = JSON.parse(localStorage.getItem("users"));
    if (dataStorage !== null) {
      dataStorage.forEach((item) => {
        if (item.email === data.email && item.password === data.password) {
          setDataToLS("isAuthorized", data.email);
          const favourite = data.email + " fav";
          const history = data.email + " history";
          if (!getDataFromLS(favourite, '""')) {
            setDataToLS(LSkey("fav"), []);
          }
          if (!getDataFromLS(history, '""')) {
            setDataToLS(LSkey("history"), []);
          }

          dispatch(addAllFavoriteMovies(getDataFromLS(favourite, '""')));
          navigate("/");
        }
      });
      if (!dataStorage.find((item) => item.email === data.email)) {
        setError({ email: "User with this email does not exist" });
        return;
      }
      if (!dataStorage.find((item) => item.password === data.password)) {
        setError({ password: "Invalid password" });
      }
    } else {
      setError({ email: "User with this email does not exist" });
    }
  };

  return (
    <div className="main">
      <div className="main__signin">
        <form onSubmit={handleSubmit(onSign)} className="signin" action="">
          <h5 className="signin__title">Sign in</h5>
          <label htmlFor="signinEmail">E-mail</label>
          <input
            {...register("email", {
              required: " This field cannot be empty",
              pattern: {
                value: isEmail,
                message: "Email is not valid",
              },
            })}
            id="signinEmail"
            name="email"
            type="text"
            placeholder="Your email"
          />

          {errors?.email && <p className="errors">{errors?.email?.message}</p>}
          {error && <p className="errors">{error?.email}</p>}

          <label htmlFor="signinPassword">Password</label>
          <input
            {...register("password", {
              required: "This field cannot be empty",
              minLength: {
                value: 5,
                message: "Password is too short",
              },
            })}
            id="signinPassword"
            name="password"
            type="password"
            placeholder="Your password"
          />
          {errors?.password && (
            <p className="errors">{errors?.password?.message}</p>
          )}
          {error && <p className="errors">{error?.password}</p>}
          <button className="signin__btn" type="submit">
            Sign in
          </button>
        </form>
      </div>
    </div>
  );
}

export default Signin;
