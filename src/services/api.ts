import axios from "axios";

export default axios.create({
    baseURL: "http://192.168.0.110:4000/v1",
});