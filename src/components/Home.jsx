import React from "react";
import styles from "../css/startHome.module.css";
import Typingtest from "./Typingtest";
function Home() {
  return (
    <div className={styles.Home_Main_Container}>
      <div>
        <h1>TYPING TEST</h1>
      </div>

      <div></div>
      <Typingtest></Typingtest>
    </div>
  );
}

export default Home;
