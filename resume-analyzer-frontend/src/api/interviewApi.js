import axios from "axios";


const API_URL = "http://localhost:8080/api/interview";


export const evaluateAnswer = (data) => {

    return axios.post(
        `${API_URL}/evaluate`,
        data
    );

};