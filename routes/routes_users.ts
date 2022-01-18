import express from 'express';
import { getAllUsers , createUser, getUser, deleteUser} from '../controllers/controllerUser';

import { getJWT } from '../controllers/controllerUser';

const router = express.Router();

router.get('/', getAllUsers);
router.post('/', createUser);
router.get('/:id', getUser);
router.delete('/:id', deleteUser);
router.get('/login/',getJWT);

// Export the router
export default router;
