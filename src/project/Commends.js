import Navlink from "./Navlink";
import React,{useContext, useEffect, useState} from "react";
import { Ground } from "./Context";
import User from "./User";

const Commends=()=>{
const useGroundcontext=useContext(Ground);
useEffect(()=>{
  useGroundcontext.fetchcall("comments")
  useGroundcontext.setAdd("prakash")
},[])       

    return(
        <>
        <Navlink/>
        <h1></h1>
        <h1 className="center">commends</h1>
        <div className="main">
         {useGroundcontext.center.map(item=>(
            <div className="sub">
                <h3>{item.id}</h3>
                <p>{item.name}</p>
                <p>{item.email}</p>
                <p>{item.body}</p>
                </div>
         ))}

        </div>

        </>
    )
}
export default Commends;
