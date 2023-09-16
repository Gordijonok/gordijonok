function Signin() {
  return (
    <div className="main">
      <div className="main__signin">
        <form className="signin" action="">
          <h5 className="signin__title">Sign in</h5>
          <label htmlFor="signinEmail">E-mail</label>
          <input
            id="signinEmail"
            name="inemail"
            type="text"
            placeholder="Your email"
          />
          <label htmlFor="signinPassword">Password</label>
          <input
            id="signinPassword"
            name="inpassword"
            type="text"
            placeholder="Your password"
          />
          <button className="signin__btn" type="submit">
            Sign in
          </button>
        </form>
      </div>
    </div>
  );
}

export default Signin;
