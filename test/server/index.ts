import { logger } from '@app/utils';
import { CONST_PORTS_TEST_SERVER_DEFAULT } from '@app/config/consts';
import { app } from './app';

const testServerPort = process.env.SERVER_TEST_PORT || CONST_PORTS_TEST_SERVER_DEFAULT;

app.listen(testServerPort, () => {
  logger.info(`Test server listening on port ${testServerPort}`);
});
