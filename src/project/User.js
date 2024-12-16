
import Navlink from "./Navlink";
import React,{useEffect,useState,useContext, createContext} from "react";
import { Ground } from "./Context";

const User=({name})=>{
    const useGroundContext = useContext(Ground)
    let b = useGroundContext.user;
    const[store,setStore]=useState([]);
    const[user,setUser]=useState(null)

    

useEffect(()=>{
 useGroundContext.fetchcall("users")

},[])
console.log("nameshow",useGroundContext.add)

const handleclick=(e)=>{
    let newvalue=e.target.value;
    let code=newvalue.charCodeAt(0);
    let length=parseInt(newvalue);
    if(length>0 && length<=1000){
        setStore(b.slice(0,length))
    }else{
        setStore(b);
        alert("invalid input")
    }

}

    return(

        <>
        <Navlink/>
        <h1 className="center">users</h1>
       <form>
        <input type="tel" onChange={handleclick}></input>
        </form>
        <div className="main">   
         {store.map(data=>(
            <div className="sub" >
                <h3>{data.id}</h3>
                <p>{data.name}</p>
                <p>{data.email}</p>
                <p>{data.username}</p>
                <p>{data.phone}</p>
                <p>{data.website}</p>
                <p>{data.address.street}</p>
                <p>{data.address.city}</p>
                <p>{data.address.zipcode}</p>
                <p>{data.company.name}</p>
            </div>
         ))}

        </div>
        <div>
                <h3>{user && user.id}</h3>
                <p>{user && user.name}</p>
                <p>{user && user.email}</p>
                <p>{user && user.username}</p>
                <p>{user && user.phone}</p>
                <p>{user && user.website}</p>
                <p>{user && user.address.street}</p>
                <p>{user && user.address.city}</p>
                <p>{user && user.address.zipcode}</p>
                <p>{user && user.company.name}</p>
            

        </div>

        </>
    )
}

export default User;


