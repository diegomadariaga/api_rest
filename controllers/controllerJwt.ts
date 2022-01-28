import jwt from 'jsonwebtoken';

const verifyJwtToken =  (token: string) => {
    if (token) {
        try {
            const result = jwt.verify(token, process.env.SECRET_KEY|| "1234");
            console.log("result",result);
            return result;
        } catch (error) {
            return false;
        }
    } else {
        return false;
    }
};

const getJWT = (id: number, password:string) => {
    if (id && password) {
        const payload = {
            id,
            password
        }
        const token = jwt.sign(payload, process.env.SECRET_KEY|| "1234", {
            expiresIn: '1h'
        });
        return token;
    } else {
        return false;
    }
}
export { verifyJwtToken, getJWT };