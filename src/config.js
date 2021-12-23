export const BASE_URL = 'http://52.78.142.179:8000';

const API_CONFIG = {
  SIGNIN: `${BASE_URL}/users/signin`,
  HOST_REGISTER: `${BASE_URL}/users/host`,
  HOST_LIST: `${BASE_URL}/users/hosts`,
  HOST_IMAGE: `${BASE_URL}/users/imageUploader`,
  HOST_DETAIL: `${BASE_URL}/users/hosts/detail/`,
  BOOKING: `${BASE_URL}/bookings`,
};

export default API_CONFIG;
