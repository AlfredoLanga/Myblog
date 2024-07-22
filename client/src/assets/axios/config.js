import axios from 'axios';
const loginFecth = axios.create({
    baseURL:'http://localhost:5001',
    headers: {
        'Content-Type': 'application/json',
        'Authorization':`Bearer ${localStorage.getItem("token") ?? ""}`
    }
})
export default  loginFecth
