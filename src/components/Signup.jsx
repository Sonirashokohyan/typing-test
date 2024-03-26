import { useState } from "react";
import styles from "../css/Signup.module.css";
import { Link, useNavigate } from "react-router-dom";
import { Toaster, toast } from "sonner";
function Signup() {
  const [loading, setLoading] = useState(false);
  const [formValues, setFormValues] = useState(null);

  let navigate = useNavigate();
  function getForm(e) {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  }

  async function SendForm() {
    if (formValues) {
      if (formValues.name) {
        if (formValues.password && formValues.ConfirmPassword) {
          if (formValues.password === formValues.ConfirmPassword) {
            let product;
            try {
              setLoading(true);
              let getp = await fetch("https://sonira.pythonanywhere.com/api/register/", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify(formValues), // Corrected line
              });

              getp = await getp.json();
              console.log(getp);

              if (getp.success) {
                setLoading(false);
                toast.error(getp.success);
                product = true;
                setFormValues(null);
              }else {
                setLoading(false)
                toast.error("Username Already Exists");
                product = false;
              }
            } catch (error) {
              product = false;
            }
            
            if (product) {
              navigate("/");
            } else {
              // toast.error("Form Submission Failed Please try again.");
            }
          } else {
            toast.error("password and confirm not equal.");
          }
        } else {
          toast.error("Please fill the password field.");
        }
      } else {
        toast.error("Please fill the Name input.");
      }
    } else {
      toast.error("Please fill the form.");
    }
  }

  return (
    <div className={styles.Login_container}>
      <div className={styles.loginform}>
        <section className={styles.container}>
          <div className={styles.login_container}>
            <Toaster richColors position="top-center" />
            <div className={`${styles.circle} ${styles.circle_one}`}></div>
            <div className={styles.form_container}>
              <h1 className={styles.opacity}>SIGN UP</h1>

              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  SendForm();
                }}
              >
                <input
                  type="text"
                  placeholder="Name"
                  name="name"
                  onChange={(e) => {
                    getForm(e);
                  }}
                />
                <input
                  type="text"
                  placeholder="Username"
                  name="username"
                  onChange={(e) => {
                    getForm(e);
                  }}
                />
                <input
                  type="password"
                  placeholder="Password"
                  name="password"
                  onChange={(e) => {
                    getForm(e);
                  }}
                />
                <input
                  type="password"
                  placeholder="Confirm Password"
                  name="ConfirmPassword"
                  onChange={(e) => {
                    getForm(e);
                  }}
                />

                <button className={styles.btn_72} type="submit">
                {
                  loading ? <span className={styles.loader}></span> :"Register"

                 }
                </button>
              </form>
              <div
                className={`${styles.register_forget} ${styles.opacity}`}
                style={{ display: "flex", justifyContent: "center" }}
              >
                <Link to={"/"}> Already have an account</Link>
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

export default Signup;
