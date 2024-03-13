import React from "react";
import styles from "../css/startHome.module.css";
import Typingtest from "./Typingtest";
function Home() {
  return (
    <div className={styles.Home_Main_Container}>
      <div style={{borderBottom:"1px solid white",marginBottom:"6rem"}}>
        <h1>TYPING TEST</h1>
      </div>

      <div></div>
      <Typingtest></Typingtest>
      <div style={{borderBottom:"1px solid white",marginTop:"6rem"}}></div>
    </div>
  );
}

export default Home;
