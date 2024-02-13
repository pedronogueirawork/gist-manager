import { beforeEach, describe, expect, it } from "vitest";
import { authenticateToken, getAuthToken, isLogged, logout } from "..";
import { Authentication } from "@/enums";

describe('AuthService', () => {
    const testToken = 'thisIsAToken'

    beforeEach(async () => {
        await authenticateToken(testToken);
    })

    it('Logs the user correctly', () => {
        const token = localStorage.getItem(Authentication.AUTH_STORAGE_NAME);

        expect(token).toStrictEqual(testToken);
    })

    it('Gets the user token correctly', async () => {
        const token = await getAuthToken();

        expect(token).toStrictEqual(testToken);
    })

    it('Checks if the user is logged', async () => {
        const token = await isLogged();

        expect(token).toStrictEqual(true);
    })

    it('Logs out the user correctly', async () => {
        const token = await logout();

        expect(token).toStrictEqual(undefined);
    })
})