'use strict';

import Member from './member';

export default app => {
	app.use('/member', Member);
}