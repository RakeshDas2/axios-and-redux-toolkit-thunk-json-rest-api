import axios from "axios";

const httpInstance=axios.create({
    baseURL:'http://localhost:3006'
})
export default httpInstance;