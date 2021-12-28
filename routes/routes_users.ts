import express from 'express';
import { getAllUsers , createUser, getUser, deleteUser} from '../controllers/controllerUser';

const router = express.Router();

router.get('/', getAllUsers);
router.post('/', createUser);
router.get('/:id', getUser);
router.delete('/:id', deleteUser);

// Export the router
export default router;
