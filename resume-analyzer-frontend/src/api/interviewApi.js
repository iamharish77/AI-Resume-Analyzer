import axios from "axios";

const API_URL = "https://ai-resume-analyzer-backend-pa3i.onrender.com/api/interview";

export const evaluateAnswer = (data) => {

    return axios.post(
        `${API_URL}/evaluate`,
        data
    );

};