/**
 * 인증이 필요 없는 공개적으로 접근 가능한 경로의 배열
 * 이 경로들은 인증을 요구하지 않습니다
 * @type {string[]}
 */
export const publicRoutes = ["/"];

/**
 * 인증에 사용되는 경로의 배열
 * 로그인된 사용자는 이 경로로 리디렉션됩니다
 * @type {string[]}
 */
export const authRoutes = ["/signin"];

/**
 * API 인증 경로의 접두사
 * 이 접두사로 시작하는 경로는 API 인증에 사용됩니다
 * @type {string}
 */
export const apiAuthPrefix = "/api/auth";

/**
 * 로그인 후 기본 리디렉션 경로
 * @type {string}
 */
export const DEFAULT_LOGIN_REDIRECT = "/";
