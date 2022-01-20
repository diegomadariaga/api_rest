"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const controllerUser_1 = require("../controllers/controllerUser");
const router = express_1.default.Router();
router.get('/', controllerUser_1.getAllUsers);
router.post('/', controllerUser_1.createUser);
router.get('/:id', controllerUser_1.getUser);
router.delete('/:id', controllerUser_1.deleteUser);
router.post('/login/:id', controllerUser_1.JWT);
// Export the router
exports.default = router;
