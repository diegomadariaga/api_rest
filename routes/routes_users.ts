import express from 'express';
import { getAllUsers , createUser, getUser, deleteUser} from '../controllers/controllerUser';

import { getJWT } from '../controllers/jwt';

const router = express.Router();

router.get('/', getAllUsers);
router.post('/', createUser);
router.get('/:id', getUser);
router.delete('/:id', deleteUser);
router.post('/login/:id',getJWT);

// Export the router
export default router;
