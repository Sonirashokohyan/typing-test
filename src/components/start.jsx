import React from "react";
import styles from "../css/startHome.module.css";
import { useNavigate } from "react-router-dom";

function Start() {
  const navigate = useNavigate();
  return (
    <div className={styles.startmain_container}>
      <div className={styles.startmain_container_cover}></div>
      <div className={styles.startmain_container_start}>
        <h1
          onClick={() => {
            navigate("/home");
          }}
        >
          START
        </h1>
        <h1
          onClick={() => {
            navigate("/home");
          }}
        >
          START
        </h1>
      </div>

      <h2>Velocity Type: Conquer the Keyboard!</h2>
    </div>
  );
}

export default Start;
