import  { useEffect, useState } from "react";
import styles from "../css/startHome.module.css";
import Typingtest from "./Typingtest";
import { useNavigate } from "react-router-dom";
import { Toaster,toast } from "sonner";
function Home() {
 
  const [loading, setLoading] = useState(true);
  const [checkprofile, setCheckProfile] = useState(false);
  const [checkRecords, setCheckRecords] = useState(false);
  const [recieveRecords, setRecieveRecords] = useState("");

  useEffect(() => {
    checkprofile === false && setCheckRecords(false);
  }, [checkprofile, checkRecords]);
  let navigate=useNavigate()

  let logout=()=>{
      localStorage.removeItem("token");
      navigate("/")
}
let recieveWPM=async()=>{
  let token=localStorage.getItem("token")
  if(token){
  try{ let name=await fetch("http://127.0.0.1:8000/api/records/",{
method:"POST",
headers:{"Content-Type":"application/json"},
body:JSON.stringify({token})
})
name=await name.json();
if(name){
  setLoading(false)

setRecieveRecords(name)
}}catch(error){

  toast.error("Data recieving failed.")


  }


}
}

  return (
  <div className={styles.Home_Main_Container}>
    <Toaster richColors position="top-center"/>
      <div className={styles.Home_text}
        style={{
          borderBottom: "1px solid white",
          marginBottom: "3rem",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <h1
          onClick={() => {
            setCheckProfile(false);
          }}
        >
          Check Your Typing Speed
        </h1>
        <div
      
          className={styles.Home_Main_Container_dropdownimg}
          onClick={() => {
            setCheckProfile(!checkprofile);
            recieveWPM()
          }}
        >
          <h2 className={styles.profile} style={{ fontSize: "1.9ssrem" }}>{localStorage.getItem("name")[0].toUpperCase()}</h2>
          {checkprofile && (
            <div
              className={styles.container_dropdown_divs}
              // onMouseLeave={() => {
              //   setCheckProfile(false);
              // }}
            >
              <div
                className={styles.dropdown_divs}
                onMouseEnter={() => {
                  setCheckRecords(true);
                }}
              >
                <i
                  className="bx bx-chart"
                  style={{ fontSize: "1.2rem", paddingRight: "5px" }}
                ></i>
                <span>Records</span>
              </div>
              <div
                className={styles.dropdown_divs}
                onClick={() => {
                  logout();
                }}
                onMouseEnter={() => {
                  setCheckRecords(false);
                  
                }}
              >
                <i
                  className="bx bx-log-out"
                  style={{ fontSize: "1.2rem", paddingRight: "5px" }}
                ></i>
                <span>Logout</span>
              </div>
            </div>
          )}
          {checkRecords && checkprofile && (
            <div
              className={styles.dropdown_records}
              onMouseEnter={() => {
                setCheckRecords(true);
              }}
              onMouseLeave={() => {
                setCheckProfile(false);
              }}
            >
              <div>
                <h3>Recents</h3>
                <i className="bx bx-chevron-right" style={{ color: "white" }}></i>
              </div>
              
           {loading&& <span className={styles.loader}></span>}
              
         {
          recieveRecords && recieveRecords.map((item,index)=>{
           return (<div key={index}><h3>
             WPM : {item.wpm}
            </h3></div>) 
          })
         }
            </div>
          )}
        </div>
      </div>

      <div></div>
      <Typingtest></Typingtest>
      <div
        style={{ borderBottom: "1px solid white", marginTop: "3rem" }}
        onClick={() => {
          setCheckProfile(false);
        }}
      ></div>
    </div>
  );
}

export default Home;
