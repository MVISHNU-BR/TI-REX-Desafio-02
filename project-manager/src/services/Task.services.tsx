import { TaskInterface } from "../types/TaskInterface"
import { Baseurl_ } from "./baseurl"


export const postTask = async (param:TaskInterface) => {
    
    try{
        const response = await fetch(`${Baseurl_}/tasks`,{
            method: `POST`, 
            headers: {
                 'Content-Type': 'application/json'
            },
            body:JSON.stringify(param)
    
        })

        if(!response.ok){
            console.log(response.statusText)
        }
        const data = await response.json()
        return data
    } catch (error){
        console.log(error)
        return null
    }
    
}