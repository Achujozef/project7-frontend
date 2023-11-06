const POST_BASE_URL = 'http://localhost:8003';
const DOCTOR_BASE_URL = 'http://localhost:8002';
const USER_BASE_URL = 'http://localhost:8001';


const POSTS_API_PATH = '/api/posts';
const DOCTOR_API_PATH = '/api/doctor';


export const API_URLS = {
  POST_LIKE_DISLIKE: `${POST_BASE_URL}${POSTS_API_PATH}`,
  GET_DOCTOR_LIST : `${DOCTOR_BASE_URL}${DOCTOR_API_PATH}`
};