const { default: axios } = require("axios");


export class ServerCall{
    static  sendGetReq(url){
        return axios.get(process.env.BASE_URL+url)
    } 
    static sendPostReq(url, data){
        return axios.post(process.env.BASE_URL+url, data)
    }
    static sendPutReq(url, data){
        return axios.put(process.env.BASE_URL+url, data)
    }
    static sendDeleteReq(url){
        return axios.delete(process.env.BASE_URL+url)        
    }
}