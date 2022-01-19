/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */

const {verifyJwtToken, getJWT} = require("../build/controllers/controllerJwt");

describe('VerifyJwtToken', () => {
    test('para un token no valido', async () => {
        const token = "asdasd"
        const user = verifyJwtToken(token)
        expect(user).toBe(false);
    });
});

