import axios from "axios";

const API_URL = "https://ai-resume-analyzer-backend-pa3i.onrender.com/api/resume";

export const uploadResume = (file) => {

    const formData = new FormData();

    formData.append("file", file);

    return axios.post(
        `${API_URL}/upload`,
        formData,
        {
            headers:{
                "Content-Type":"multipart/form-data"
            }
        }
    );
};
