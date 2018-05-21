import axios from 'axios'

const URL_STUDENTS_EXPORT = '/study-manage/students/export'

export const exportStudentsInfo = (data) => axios.post(URL_STUDENTS_EXPORT, data)
