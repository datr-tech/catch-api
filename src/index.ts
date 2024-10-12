import 'dotenv/config';
import { app } from '@app/api';
import { CONST_PORTS_SERVER_DEFAULT } from '@app/config/consts';
import { logger } from '@app/utils/logger';

const port = process.env.SERVER_PORT || CONST_PORTS_SERVER_DEFAULT;

app.listen(port, () => {
  logger.info(`Listening on port ${port}`);
});
