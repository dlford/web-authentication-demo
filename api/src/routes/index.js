import express from 'express';

import healthcheck from './healthcheck';

const router = express.Router();

router.use('/healthcheck', healthcheck);

export default router;
