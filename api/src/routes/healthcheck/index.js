import express from 'express';

import get from './healthcheck';

const router = express.Router();
router.use(get);

export default router;
