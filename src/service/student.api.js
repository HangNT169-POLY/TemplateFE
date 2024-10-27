import axios from 'axios'
import { API_URL_SINH_VIEN } from '../constants/url'

export const getStudents = async () =>
  (await axios.get(API_URL_SINH_VIEN)).data || []

export const getStudentById = async id =>
  (await axios.get(`${API_URL_SINH_VIEN}/${id}`)).data || null

export const createStudent = async student =>
  (await axios.post(API_URL_SINH_VIEN, student)).data || null

export const updateStudent = async (id, student) =>
  (await axios.put(`${API_URL_SINH_VIEN}/${id}`, student)).data || null

export const deleteStudent = async id =>
  (await axios.delete(`${API_URL_SINH_VIEN}/${id}`)).status === 200
