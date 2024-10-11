import express, { Request, Response } from 'express';
import { CONST_ROUTES_BASE } from '@app/config/consts';
import { IRouter } from '@app/interfaces/api';

const router = express.Router({ mergeParams: true });

export const specRouter: IRouter = router.get(CONST_ROUTES_BASE, async (_req: Request, res: Response) => {
  res.send({ spec: 'NOT_AVAILABLE' });
});
