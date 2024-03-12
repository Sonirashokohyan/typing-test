import React, { useState } from "react";
import styles from "../css/Signup.module.css";
import { Link } from "react-router-dom";
import { Toaster, toast } from "sonner";
function Login() {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");

  let logincheck = async () => {
    if (username && password) {
      let logincheck = fetch("http://localhost:4000/logincheck", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });
      if (logincheck) {
        localStorage.setItem("token", logincheck.token);
        localStorage.setItem("userId", logincheck.UserId);
      } else {
        toast.error("Username and Password is incorrect.");
      }
    } else {
      toast.error("please fill the username and password.");
    }
  };
  return (
    <div className={styles.Login_container}>
      <div className={styles.loginform}>
        <section className={styles.container}>
          <div className={styles.login_container}>
            <Toaster richColors position="top-center"></Toaster>
            <div className={`${styles.circle} ${styles.circle_one}`}></div>
            <div className={styles.form_container}>
              <h1 className={styles.opacity}>LOGIN</h1>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  logincheck();
                }}
              >
                <input
                  type="text"
                  placeholder="USERNAME"
                  value={username}
                  onChange={(e) => {
                    setUserName(e.target.value);
                  }}
                />
                <input
                  type="password"
                  placeholder="PASSWORD"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                />

                <button class={styles.btn_72} type="submit">
                  Login
                </button>
              </form>
              <div className={`${styles.register_forget} ${styles.opacity}`}>
                <Link to={"/signup"}> Register</Link>
                <Link to={"/forgotpassword"}> Forgot Password</Link>
              </div>
            </div>
            <div className={`${styles.circle} ${styles.circle_two}`}></div>
          </div>
          <div className={styles.theme_btn_container}></div>
        </section>
      </div>
    </div>
  );
}

export default Login;
