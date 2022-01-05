/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */
const {getUserById} = require('../build/database/db.js');

describe('getUserById', () => {
    test('debe retornar un usuario', async () => {
        const user = await getUserById(1);
        expect(user.id).toBe(1);
        expect(user.username).toBe('diego');
        expect(user.password).toBe('string');
    });
    
    test('para un id que no existe, debe retornar undefined', async () => {
        const user = await getUserById(85282);
        expect(user).toBeUndefined();
    });
    
    test('si no se pasa un id debe retornar undefined', async () => {
        const user = await getUserById();
        expect(user).toBeUndefined();
    });
});

