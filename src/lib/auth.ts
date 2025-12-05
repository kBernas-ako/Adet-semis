export const TOKEN_KEY = "accessToken";

export function saveToken(token: string) {

    if (typeof window !== 'undefined') {
        localStorage.setItem(TOKEN_KEY, token);
    }
}

export function getToken(): string | null {

    if(typeof window !== 'undefined') {
        return localStorage.getItem(TOKEN_KEY);
    }
    return null;
}

export function logoutUser() {

    if (typeof window !== 'undefined') localStorage.removeItem(TOKEN_KEY);
}