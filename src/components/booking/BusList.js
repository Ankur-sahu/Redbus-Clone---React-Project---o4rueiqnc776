import React, { useEffect, useState } from "react";
import Nav from "../layouts/Nav";
import { useLocation } from "react-router-dom";
import loader from "../../Images/loading-splash.gif"

const RenderBuses = (props) => {
    return (
        <>

            {
                props.data.length === 0 ? <h1>No Bus Found</h1> :
                    <div className="bus-search-list-container">
                        <div className="sortng-tab">
                            <div className="title-sort-tab">
                                <div className="bus-title">
                                    <h4>2 Buses</h4><h3>Found</h3>
                                </div>
                                <div>
                                    <h4>SORT BY:</h4>
                                </div>
                            </div>
                            <div>
                                <h3>Departure</h3>
                            </div>
                            <div>
                                <h3>Arrival</h3>
                            </div>
                            <div>
                                <h3>Rating</h3>
                            </div>
                            <div>
                                <h3>Fare</h3>
                            </div>
                        </div>
                        {
                            props.data.map((bus) => (
                                <>
                                    <div className="bus-list">
                                        <div className="title-sort-list">
                                            <div >
                                                <h4>{bus.busName}</h4><h3>{bus.type}</h3>
                                            </div>
                                            <div>
                                                <button className="view-seat">View Seat</button>
                                            </div>
                                        </div>
                                        <div>
                                            <h4>{bus.departureTime}</h4>
                                            <h3>{bus.source}</h3>
                                        </div>
                                        <div>
                                            <h3>{bus.arrivalTime}</h3>
                                            <h3>{bus.destination}</h3>
                                        </div>
                                        <div>
                                            <h3>{bus.rating}/10</h3>
                                        </div>
                                        <div className="price">
                                            <h3>INR</h3> <h4>{bus.ticketPrice}</h4>
                                        </div>
                                    </div>
                                    {/* <div>
                                    <h1>{bus.busName}</h1>
                                    <h1>{bus.ticketPrice}</h1>
                                    <h1>{bus.arrivalTime}</h1>
                                    <h1>{bus.departureTime}</h1>
                                    <h1>{bus.source}</h1>
                                    <h1>{bus.destination}</h1>
                                </div> */}
                                </>
                            ))
                        }
                    </div>

            }

        </>
    )
}

const BusList = () => {

    const locationP = useLocation()
    const [buses, setBuses] = useState(null)
    let initalData

    const getBus = async () => {
        try {

            const data = await fetch(`https://content.newtonschool.co/v1/pr/63b70222af4f30335b4b3b9a/buses?source=${locationP.state.fromS}&destination=${locationP.state.toDest}`)
            initalData = await data.json()
            initalData.map((obj)=>{
                obj.type = "Volvo Sleeper (2+1)"
                obj.rating = Math.floor((Math.random()*8)+1)
                obj.clicked = false
            })
            console.log(initalData, "test")

            setBuses(initalData)


        } catch (error) {
            console.log(error)
        }


    }
    useEffect(() => {
        getBus()
    }, [])
    return (
        <>
            <div className="bus-search-container">
                {buses ? <RenderBuses data={buses} /> : <img src={loader} alt="loader" />}
            </div>

        </>
    )
}
export default BusList