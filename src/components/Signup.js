function Signup() {
  return (
    <div className="main">
      <div className="main__signin">
        <form className="signin" action="">
          <h5 className="signin__title">Sign up</h5>
          <label htmlFor="signupEmail">E-mail</label>
          <input id="signupEmail" type="text" placeholder="Your email" />

          <label htmlFor="signupLogin">Login</label>
          <input id="signupLogin" type="text" placeholder="Your login" />

          <label htmlFor="signupPassword">Password</label>
          <input id="signupPassword" type="text" placeholder="Your password" />
          <button className="signin__btn">Sign up</button>
        </form>
      </div>
    </div>
  );
}

export { Signup };
