import express, { Request, Response } from 'express';
import { matchedData, validationResult } from 'express-validator';
import { paramWebsiteIdValidator, paramSearchTermValidator } from '@app/api/validators';
import { CONST_ROUTES_BASE } from '@app/config/consts';
import { IRouter } from '@app/interfaces/api';

const router = express.Router({ mergeParams: true });

export const serpRouter: IRouter = router.get(
  CONST_ROUTES_BASE,
  paramWebsiteIdValidator,
  paramSearchTermValidator,
  async (req: Request, res: Response) => {
    const result = validationResult(req);

    if (result.isEmpty()) {
      const { websiteId, searchTerm } = matchedData(req);
      res.send({ websiteId, searchTerm });
    } else {
      res.status(404).send({ error: result.array() });
    }
  },
);
