import express from 'express';
const router = express.Router();
import { mainState } from '../controllers/main.controller';

router.all('*', mainState);

export default router;