import { Axios } from "axios"

export const InterceptorAPI = (instance : Axios) => {
    instance.interceptors.request.use(req=>{
        console.log("request: ", req)
    })
    
    instance.interceptors.response.use(req=>{
        console.log("response: ", req)
    })
    
    return instance;
}