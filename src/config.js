let API_BASE_URL = process.env.REACT_APP_API_BASE_URL || 'http://localhost:8080/api'

export default {
    API_BASE_URL: API_BASE_URL,
    TOKEN_CONTENT_KEY: 'userToken',
    UNAUTHORIZED_ENDPOINT: '/register/login',
    FORBIDDEN_ENDPOINT: '/no-access',
    NOT_FOUND_ENDPOINT: '/not-found',
    SERVER_ERROR_ENDPOINT: '/server-error',
};