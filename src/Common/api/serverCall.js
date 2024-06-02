import { Cookie } from "./cookies";

const { default: axios } = require("axios");


export class ServerCall{
    static  sendGetReq(url){
        return axios.get(process.env.NEXT_PUBLIC_BASE_URL+url, {
            headers:{
                Authorization: Cookie.getCookie('token')
            }
        })
    } 
    static sendPostReq(url, data){
        return axios.post(process.env.NEXT_PUBLIC_BASE_URL+url, data)
    }
    static sendPutReq(url, data){
        return axios.put(process.env.NEXT_PUBLIC_BASE_URL+url, data)
    }
    static sendDeleteReq(url){
        return axios.delete(process.env.NEXT_PUBLIC_BASE_URL+url)        
    }
}