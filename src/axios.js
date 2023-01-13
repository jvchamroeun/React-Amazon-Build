import axios from "axios";

const instance = axios.create({
    baseURL: 'http://127.0.0.1:5001/clone-build-8ade1/us-central1/api', // API URL
});

export default instance;