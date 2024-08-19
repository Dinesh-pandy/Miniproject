import axios from "axios";
const URI = 'http://localhost:2003'
const getStudent = () => axios.get(`${URI}/student/getstu`)
const addStudent = (student) => axios.post(`${URI}/student/addstu`, student)
// const getProductbyId = (id)=> axios.get(`${URI}/product/find/${id}`)
const editStudent = (stu_id, student) => axios.put(`${URI}/student/updatestu/${stu_id}`, student)
const deleteStudent = (stu_id) => axios.delete(`${URI}/student/delete/${stu_id}`)
const getShipping = () => axios.get(`${URI}/getshp`)
const addShipping = (Shipping) => axios.post(`${URI}/addshp`, Shipping)
// const getProductbyId = (id)=> axios.get(`${URI}/product/find/${id}`)
const editShipping = (ship_id, Shipping) => axios.put(`${URI}/updatefeed/${ship_id}`, Shipping)
const deleteShipping = (ship_id) => axios.delete(`${URI}/delete/${ship_id}`)

export { getStudent, addStudent, deleteStudent, editStudent, getShipping, addShipping, deleteShipping, editShipping }