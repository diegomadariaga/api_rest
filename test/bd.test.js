/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */
const {getUserById} = require('../build/database/db.js');

test('getUserById', async () => {
    const user = await getUserById(1);
    expect(user[0].id).toBe(1);
    expect(user[0].username).toBe('diego');
    expect(user[0].password).toBe('string');
});

test('getUserById', async () => {
    const user = await getUserById(85282);
    expect(user[0]).toBeUndefined();
});

test('getUserById', async () => {
    const user = await getUserById();
    expect(user).toBeUndefined();
});