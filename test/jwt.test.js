/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */

const { verifyJwtToken , getJWT} = require("../build/controllers/controllerJwt");

describe("VerifyJwtToken", () => {
    test("para un token valido", () => {
        const token = getJWT(1,"test");
        expect(verifyJwtToken(token)).not.toBeNull();
        expect(verifyJwtToken(token)).not.toBeUndefined();
        expect(verifyJwtToken(token)).toBeTruthy();
    });

    test("para un token no valido", async () => {
        const token = "asdasd";
        const user = verifyJwtToken(token);
        expect(user).toBe(false);
    });
});
