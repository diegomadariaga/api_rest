import express from 'express';
import { getAllUsers , createUser, getUser} from '../controllers/controllerUser';

const router = express.Router();

router.get('/', getAllUsers);
router.post('/', createUser);
router.get('/:id', getUser);

// Export the router
export default router;
