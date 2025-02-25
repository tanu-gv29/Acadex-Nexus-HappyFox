import axios from "axios";

const API_BASE_URL = "http://127.0.0.1:8000/api";

export const fetchExams = async () => {
  const response = await axios.get(`${API_BASE_URL}/exams/`);
  return response.data;
};

export const announceExam = async (examData) => {
  await axios.post(`${API_BASE_URL}/exams/announce/`, examData);
};
