import axios from './interceptors';

const BASE_URL = `${import.meta.env.VITE_BACK_END_SERVER_URL}/helpers`

// * Index
export const index = () => {
    return axios.get(BASE_URL)
}

// * Show
export const show = (helperId) => {
    return axios.get(`${BASE_URL}/${helperId}`)
}

// * Create
export const create = (formData) => {
    return axios.post(BASE_URL, formData)
}

// * Update
export const update = (helperId, formData) => {
    return axios.put(`${BASE_URL}/${helperId}`, formData)
}

// * Delete
export const deleteHelper = (helperId) => {
    return axios.delete(`${BASE_URL}/${helperId}`)
}

//!--- Testimonials

//*--- Create
export const createTestimonial = (helperId, formData) => {
    return axios.post(`${BASE_URL}/${helperId}/testimonials`, formData)
}

//*--- Update
export const updateTestimonial = (helperId, testimonialId, formData) => {
    return axios.put(`${BASE_URL}/${helperId}/testimonials/${testimonialId}`, formData)
}

//*--- Delete
export const deleteTestimonial = (helperId, testimonialId) => {
    return axios.delete(`${BASE_URL}/${helperId}/testimonials/${testimonialId}`)
}