import 'dotenv/config';
import { app } from '@app/api';
import { CONST_PORTS_SERVER_DEFAULT } from '@app/config/consts';
import { logger } from '@app/utils/logger';

const catchApiPort = process.env.SERVER_PORT || CONST_PORTS_SERVER_DEFAULT;

app.listen(catchApiPort, () => {
  logger.info(`catch-api listening on port ${catchApiPort}`);
});
