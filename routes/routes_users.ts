import express from 'express';
import { getAllUsers , createUser} from '../controllers/controllerUser';

const router = express.Router();

router.get('/', getAllUsers);
router.post('/', createUser);

// Export the router
export default router;
