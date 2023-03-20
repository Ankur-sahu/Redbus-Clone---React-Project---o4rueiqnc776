import React from "react";
import Countries from "./Countries";
import Deliver from "./Deliver";
import Header from "./Header";

const Home = ()=>{
    return(
        <>
            <Header />
            <Deliver />
            <Countries />  
        </>
    )
}

export default Home