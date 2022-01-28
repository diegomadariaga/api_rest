
const { verifyJwtToken , getJWT} = require("../build/controllers/controllerJwt");
// eslint-disable-next-line @typescript-eslint/no-var-requires
const axios = require("axios");

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
    test("request a login endpoint", async () => {
        const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwicGFzc3dvcmQiOiJzdHJpbmciLCJpYXQiOjE2NDMzMjQ0NTEsImV4cCI6MTY0MzMyODA1MX0.3bkfrIBSYDQmSeQFQw1XSliq4Nw2hnF39qwyeFSt62o";
        const response = await axios.post("http://localhost:3001/user/verify",{
            token: token
        });
        expect(response.status).toBe(200);
    });
});
