export const REST_API_KEY = "bd35d95b8db977e0b07b6fd668527afe";

export const LOGIN_REDIRECT_URL = "http://localhost:3000/get-started/login-redirect";

export const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${REST_API_KEY}&redirect_uri=${LOGIN_REDIRECT_URL}`;
