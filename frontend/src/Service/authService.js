// src/services/authService.js
import axios from 'axios';

const API_URL = 'http://localhost:5000/api'; // Your backend auth route

export const registerUser = (data) => axios.post(`${API_URL}/auth/register`, data);

export const loginUser = (data) => axios.post(`${API_URL}/auth/login`, data);

export const getAllStudents = (token) =>
    axios.get(`${API_URL}/students/`, {
      headers: { Authorization: `Bearer ${token}` },
    });
  
    export const updateStudent = (token, id, data) => {
        return axios.put(`${API_URL}/students/${id}`, data, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
      };
      
  
  export const deleteStudent = (token, id) =>
    axios.delete(`${API_URL}/students/${id}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    export const addStudent = (token, studentData) =>
        axios.post(`${API_URL}/students/`, studentData, {
          headers: { Authorization: `Bearer ${token}` },
        });
  

  