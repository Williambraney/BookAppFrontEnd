import axios from 'axios';
export default axios.create({
    baseURL: "https://hoppers.developme.space/api/",
    headers: {
        Accept: "application/json",
        authorization: "",
    }
})