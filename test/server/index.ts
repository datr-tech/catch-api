import { logger } from '@app/utils';
import { CONST_PORTS_TEST_SERVER_DEFAULT } from '@app/config/consts';
import { app } from './app';

const port = CONST_PORTS_TEST_SERVER_DEFAULT;

app.listen(port, () => {
  logger.info(`Listening on port ${port}`);
});
