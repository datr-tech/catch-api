import 'dotenv/config';
import { app } from '@app/api';
import { CONST_PORTS_DEFAULT } from '@app/config/consts';
import { logger } from '@app/utils/logger';

const port = process.env.PORT || CONST_PORTS_DEFAULT;

app.listen(port, () => {
  logger.info(`Listening on port ${port}`);
});
