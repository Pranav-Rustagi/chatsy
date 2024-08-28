const SERVER_BASE_URL = process.env.NEXT_PUBLIC_SERVER_BASE_URL;

const AUTH_API_ROUTE = `${SERVER_BASE_URL}/api/auth`;

const AUTH_ROUTES = {
    CHECK_USER: `${AUTH_API_ROUTE}/check-user`,
}

export {
    AUTH_ROUTES
};