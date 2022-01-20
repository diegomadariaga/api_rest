import express from 'express';
import { getAllUsers , createUser, getUser, deleteUser,JWT} from '../controllers/controllerUser';

const router = express.Router();

router.get('/', getAllUsers);
router.post('/', createUser);
router.get('/:id', getUser);
router.delete('/:id', deleteUser);
router.post('/login/:id',JWT);

// Export the router
export default router;
