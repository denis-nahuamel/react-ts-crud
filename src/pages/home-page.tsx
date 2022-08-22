import { FC, useEffect } from "react"
import { getAllUsers } from "../services/user-service"

export const HomePage = () =>{
    useEffect(()=>{
        getAllUsers().then(response => {console.log("response",response.data)})
    },[])
    return (<h1>hello world</h1>)
}