import React from "react";
import styles from "../css/startHome.module.css";
import { useNavigate } from "react-router-dom";
import { Toaster,toast } from "sonner";

function Start() {
  const navigate = useNavigate();
  let getName=async()=>{

    let token=localStorage.getItem("token")
    try{ let name=await fetch("http://127.0.0.1:8000/api/profile/",{
  method:"POST",
  headers:{"Content-Type":"application/json"},
  body:JSON.stringify({token})
})
name=await name.json();
if(name){
  console.log(name)
localStorage.setItem("name",name)
navigate("/home");

}}catch(error){
  
    toast.error("error in getting name.")
  
  
    }
   
  }
  return (
    <div className={styles.startmain_container}>
      <div className={styles.startmain_container_cover}></div>
      <div className={styles.startmain_container_start}>
      <Toaster richColors position="top-center"/>
        <h1
          onClick={() => {
            getName()
          }}
        >
          START<i class='bx bx-horizontal-right'></i>
        </h1>
        <h1
          onClick={() => {
getName()
           

          }}
        >
          START<i class='bx bx-horizontal-right'></i>
        </h1>
      </div>

      <h2>Velocity Type: Conquer the Keyboard!</h2>
    </div>
  );
}

export default Start;
