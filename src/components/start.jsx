import styles from "../css/startHome.module.css";
import { useNavigate } from "react-router-dom";
import videobg from "/bg.mp4"
import videobgS from "/bg2.mp4"
import { useEffect, useRef, useState } from "react";
function Start() {
  const [muted,setMuted]=useState(false);
  const navigate = useNavigate();
const videoref=useRef(null) 

const handlemuted =()=>{
setMuted(!muted);
  if(videoref.current){
    videoref.current.muted=!videoref.current.muted
  }
}

useEffect(()=>{
  if(window.innerWidth<1024){
    videoref.current.src=videobgS
  }
},[])
  
  return (
    <div className={styles.startmain_container}>
      <button className={styles.audiobtn} onClick={()=>{
        handlemuted()
      }} ><i className={muted ? "bx bx-volume-full":"bx bx-volume-mute"}></i></button>
     
          <video  autoPlay loop ref={videoref} muted>
            <source  src={videobg} type="video/mp4"/>
          </video>
    
      <div className={styles.startmain_container_cover}>
      <div className={styles.startmain_container_start}>

        <h1
          onClick={() => {
           navigate("/home")
          }}
        >
          START
        </h1>
        <h1
          onClick={() => {

           
            navigate("/home")

          }}
        >
          START
        </h1>
      </div>

      <h2>Velocity Type: Conquer the Keyboard!</h2></div>
    </div>
  );
}

export default Start;
