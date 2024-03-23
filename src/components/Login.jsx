import  { useState } from "react";
import styles from "../css/Signup.module.css";
import { Link, useNavigate } from "react-router-dom";
import { Toaster, toast } from "sonner";

function Login() {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  let logincheck = async () => {
    if (username && password) {
      if (username && password) {
        setLoading(true);
        let logincheck = await fetch("http://127.0.0.1:8000/api/login/", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ username, password }),
        });
        logincheck = await logincheck.json();
        console.log("logincheck",logincheck);
        if (logincheck.token) {
          setLoading(false);
          localStorage.setItem("token", logincheck.token);
          localStorage.setItem("name", logincheck.name);
          navigate("/start");
        } else {
          setLoading(false);
          toast.error("Username and Password is incorrect.");
        }
      } else {
        toast.error("please fill the username and password.");
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

                <button className={styles.btn_72} type="submit">
                 {
                  loading ? <span className={styles.loader}></span> :"Login"

                 }
                </button>
              </form>
              <div className={`${styles.register_forget} ${styles.opacity}`}>
                <Link to={"/signup"}> Register</Link>
              </div>
            </div>
            {/* <div className={`${styles.circle} ${styles.circle_two}`}></div> */}
          </div>
          <div className={styles.theme_btn_container}></div>
        </section>
      </div>
    </div>
  );
}

export default Login;
