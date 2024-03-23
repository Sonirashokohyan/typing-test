// TypingArea.js
import  { useEffect } from "react";
import { toast } from "sonner";

const TypingArea = ({
  typingText,
  inpFieldValue,
  timeLeft,
  mistakes,
  WPM,
  CPM,
  initTyping,
  handleKeyDown,
  resetGame,
}) => {
useEffect(()=>{

  if(timeLeft===0){
   let sendData=async()=>{
    let token=localStorage.getItem("token")
    try{ let name=await fetch("http://127.0.0.1:8000/api/records-save/",{
  method:"POST",
  headers:{"Content-Type":"application/json"},
  body:JSON.stringify({token,WPM})
})
name=await name.json();
if(name){
toast.success("Data Saved Successfuly.")
}}catch(error){
  
    toast.error("Data Saving failed.")
  
  
    }
   }
   sendData()
   
   
  }
},[timeLeft,WPM])


  return (
    <div className="section" style={{ color: "white" }}>
      <div className="section1">
        <p id="paragraph">{typingText}</p>
      </div>
      <div className="section2">
        <ul className="resultDetails">
          <div className="li_div">
            <li className="time">
              <p>Time Left:</p>
              <span>
                <b>{timeLeft}</b>s
              </span>
            </li>
            <li className="mistake">
              <p>Mistakes:</p>
              <span>{mistakes}</span>
            </li>
            <li className="wpm">
              <p>WPM:</p>
              <span>{WPM}</span>
            </li>
            <li className="cpm">
              <p>CPM:</p>
              <span>{CPM}</span>
            </li>
          </div>
        </ul>
        <button onClick={resetGame} className="btn">
          Try Again
        </button>
      </div>
    </div>
  );
};

export default TypingArea;
