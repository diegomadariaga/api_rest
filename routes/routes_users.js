"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var controllerUser_1 = require("../controllers/controllerUser");
var router = express_1.default.Router();
router.get('/', controllerUser_1.getAllUsers);
router.post('/', controllerUser_1.createUser);
router.get('/:id', controllerUser_1.getUser);
router.delete('/:id', controllerUser_1.deleteUser);
// Export the router
exports.default = router;
