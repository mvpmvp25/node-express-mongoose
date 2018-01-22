'use strict';

import express from 'express';
import person from './person'

const router = express.Router();


router.post('/register', person.register);
router.post('/login', person.login);
router.post('/modify', person.modify);
router.post('/del', person.del);

export default router;