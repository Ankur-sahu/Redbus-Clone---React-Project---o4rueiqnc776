import React, { useEffect, useState } from "react";

import {useNavigate} from "react-router-dom"
import switchBtn from "../../Images/switch_btn.png"
import building from "../../Images/search-building.png"
import ValidateInputComp from "../general/ValidateInputComp";

function Header() {
  const navigate = useNavigate()
  const [fromS,setFromS] = useState("")
  const [toDest,setToDest] = useState("")
  const [getDate,setGetDate] = useState("")
  const [errorMsg, setErrorMsg] = useState({
    fromS:false,
    toDest:false,
    getDate:false
  })

  const swapFn = ()=>{
    const temp = fromS
    setFromS(toDest)
    setToDest(temp)
  }

  const submitFn = ()=>{
    const pattern = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/
    if(!ValidateInputComp(pattern,fromS)){
      setErrorMsg({...errorMsg,fromS:true})
      // console.log("input 1")
    }else
    if(!ValidateInputComp(pattern,toDest)){
      setErrorMsg({...errorMsg,toDest:true})
      // console.log("input 2")
    }else
    if(!getDate){
      setErrorMsg({...errorMsg,getDate:true})
    }

    if(!errorMsg.fromS && !errorMsg.toDest && !errorMsg.getDate){
      navigate('/bus-tickets',{state:{fromS,toDest,getDate}})
    }

    
  }
  useEffect(()=>{
    console.log(errorMsg)
  },[errorMsg])

  return (
    <>
      <header>
        
        <div className="header-search-box">
          <div className="header-search-inner-box">
            <div className="header-search-input-container">
              <div className={`header-input-wraper ${errorMsg.fromS && "error-msg"}`}>
                <label htmlFor="source">
                  <img src={building} alt="building icon" />
                </label>
                <div className="search-input-text">
                  <label htmlFor="source">FROM</label>
                  <input type="text" id="source" value={fromS} onChange={(e)=>setFromS(e.target.value)}/>
                  
                </div>
              </div>
              <div className={`header-input-wraper ${errorMsg.toDest && "error-msg"}`}>
                <label htmlFor="destination">
                  <img className="dest_image" src={building} alt="building icon" />
                </label>
                <div className="search-input-text">
                  <label htmlFor="destination">TO</label>
                  <input type="text" id="destination" value={toDest} onChange={(e)=>setToDest(e.target.value)} />
                  
                </div>
              </div>
              <div className="header-input-wraper-date">
                {/* <label htmlFor="date">
                  <img src={calender} alt="calender-icon" />
                </label> */}
                <input type="date" className={errorMsg.getDate?"error-msg":"date-pick"} value={getDate} onChange={(e)=>setGetDate(e.target.value)}/>
              </div>
              <div className="header-input-wraper-btn" onClick={submitFn} >
                <h4>Search Bus</h4>
              </div>
            </div>
            <div className="header-search-switch-btn">
              <img src={switchBtn} alt="switch-btn" onClick={swapFn} />
              
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
