import express, { Request, Response } from 'express';
import { matchedData, validationResult } from 'express-validator';
import { paramSearchEngineIdValidator, paramSearchTermValidator } from '@app/api/validators';
import { CONST_ROUTES_BASE } from '@app/config/consts';
import { IRouter } from '@app/interfaces/api';

const router = express.Router({ mergeParams: true });

export const serpRouter: IRouter = router.get(
  CONST_ROUTES_BASE,
  paramSearchEngineIdValidator,
  paramSearchTermValidator,
  async (req: Request, res: Response) => {
    const result = validationResult(req);

    if (result.isEmpty()) {
      const { searchEngineId, searchTerm } = matchedData(req);

      // @TODO - Add controller call here
      res.send({ searchEngineId, searchTerm });
    } else {
      res.status(404).send({ error: result.array() });
    }
  },
);
