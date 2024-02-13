import { Authentication } from "@/enums"

export const authenticateToken = (token: string) => {
    localStorage.setItem(Authentication.AUTH_STORAGE_NAME, token);
}

export const getAuthToken = () => {
    return localStorage.getItem(Authentication.AUTH_STORAGE_NAME);
}

export const logout = () => {
    return localStorage.removeItem(Authentication.AUTH_STORAGE_NAME);
}

export const isLogged = () => {
    return localStorage.getItem(Authentication.AUTH_STORAGE_NAME) !== null
}