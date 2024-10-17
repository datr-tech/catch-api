import express, { Request, Response } from 'express';
import { matchedData, validationResult } from 'express-validator';
import { schemaController } from '@app/api/controllers';
import { paramSchemaVersionValidator } from '@app/api/validators';
import { CONSTS_ROUTES_BASE } from '@app/config/consts/routes';
import { IRouter } from '@app/interfaces/api';

const router = express.Router({ mergeParams: true });

export const schemaRouter: IRouter = router.get(CONSTS_ROUTES_BASE, paramSchemaVersionValidator, async (req: Request, res: Response) => {
  const result = validationResult(req);

  if (result.isEmpty()) {
    const { schemaVersion } = matchedData(req);
    const schema = schemaController({ schemaVersion });
    res.send({ schema });
  } else {
    res.status(404).send({ error: result.array() });
  }
});
