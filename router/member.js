'use strict';

import express from 'express';
import User from '../controller/member/user'

const router = express.Router();


router.post('/register', User.register);
router.post('/login', User.login);
router.post('/modify', User.modify);
router.post('/del', User.del);

export default router;