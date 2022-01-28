import express from 'express';
import { getAllUsers , createUser, getUser, deleteUser,JWT,verifyT} from '../controllers/controllerUser';

const router = express.Router();

router.get('/', getAllUsers);
router.post('/', createUser);
router.get('/:id', getUser);
router.delete('/:id', deleteUser);
router.post('/login',JWT);

router.post('/verify',verifyT);

// Export the router
export default router;
