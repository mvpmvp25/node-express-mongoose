'use strict';

import member from './member';

export default app => {
	app.use('/member', member);
}