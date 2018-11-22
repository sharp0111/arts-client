import envConfig from 'envConfig';

const MAIN_APP_AUTHORITY = envConfig.MAIN_APP_AUTHORITY;

export default {
    /**
     * Path used to fetch Basic Info about User
     */
    USER_BASIC_INFO_ENDPOINT: `${MAIN_APP_AUTHORITY}/user/basic-info`,

    /**
     * Path used to fetch all resources
     */
    RESOURCE_ENDPOINT: `${MAIN_APP_AUTHORITY}/resource`,


};