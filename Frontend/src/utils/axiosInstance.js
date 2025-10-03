// here we will be creating an instance of axios
import axios, { isAxiosError } from "axios";

 const axiosInstance = axios.create({
    baseURL: "http://localhost:3000",
    timeout: 7000 //if server didnt responded in 7 sec, it will throw an error "server time out"
 })

 //request interceptor
 axiosInstance.interceptors.request.use(
    (config) => {
        //here we can modify request configurations here (add auth tokens, etc)
        return config;
    },
    (error) => {
        //here we can handle request errors
        return Promise.reject(error);
    }
 )

 //response interceptor
 axiosInstance.interceptors.response.use(
    (response) => {
        //if we get response with some status code in the range of 200
        return response;
    },
    (error) => {
        //here we can handle errors
        if(error.response){
            //i.e if the server responded with a status code outside the 200 range
            const {status, data} = error.response;
            switch(status)
            {
                case 400:
                    console.error("Bad request: ", data);
                    break;
                case 401:
                    console.error("Unauthorized: ", data); //here we can redirect to login page
                    break;
                case 403:
                    console.error("Forbidden: ", data);
                    break;
                case 404:
                    console.error("Not found: ", data);
                    break;
                case 500:
                    console.error("Server error: ", data);
                    break;
                default:
                    console.error(`Error (${status}): `, data);
                    break;
            }
        }
        else if (error.request){
            //request was made out but no response was received
            console.error("Network Error: No response was received", error.request);
        }
        else{
            //something else happended while setting up the request
            console.error("Error: ", error.message);
        }

        //we can also customize the error object before rejecting
        return Promise.reject({
            isAxiosError: true,
            message: error.response?.data?.message || error.message || "Unknown error occured",
            status: error.response?.status,
            data: error.response?.data,
            originalError: error
        });
    }
 )

 export default axiosInstance;