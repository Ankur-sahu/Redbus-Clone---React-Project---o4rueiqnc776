import React, { useEffect, useState } from "react";
import Nav from "../layouts/Nav";
import { useLocation } from "react-router-dom";
import loader from "../../Images/loading-splash.gif"

const RenderBuses = (props)=>{
    return(
        <>
            {props.data.map((bus)=>(
                <>
                    <h1>{bus.busName}</h1> <br />
                    <h1>{bus.ticketPrice}</h1> <br />
                    <h1>{bus.arrivalTime}</h1> <br />
                    <h1>{bus.departureTime}</h1> <br />
                    <h1>{bus.source}</h1> <br />
                    <h1>{bus.destination}</h1> <br />
                </>
            ))}
        </>
    )
}

const BusList = ()=>{

    const locationP = useLocation()
    const [buses,setBuses] = useState(null)
    
    const getBus = async()=>{
        try {
            
            const data = await fetch(`https://content.newtonschool.co/v1/pr/63b70222af4f30335b4b3b9a/buses?source=${locationP.state.fromS}&destination=${locationP.state.toDest}`)
            const result = await data.json()
            console.log(result,"test")
            setBuses(result)

        } catch (error) {
            console.log(error)
        }


    }
    useEffect(()=>{
        getBus()
    },[])
    return(
        <>
            <Nav />
            <div className="bus-search-container">
                {buses?<RenderBuses data={buses} /> :<img src={loader} alt="loader" />}
            </div>
            
        </>
    )
}
export default BusList