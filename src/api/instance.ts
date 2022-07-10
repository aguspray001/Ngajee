import axios from "axios";
import { BASE_API_URL } from "constant";
import { InterceptorAPI } from "./interceptor";

const instance = axios.create({baseURL: BASE_API_URL});
// const interceptedInstance = InterceptorAPI(instance);

export {
    // interceptedInstance,
    instance
};