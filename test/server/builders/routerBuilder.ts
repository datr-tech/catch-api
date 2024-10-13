import express, { Request, Response } from 'express';
import { IRouter } from '@app/interfaces/api';
import {
  CONST_ROUTES_BASE,
  CONST_ROUTES_TEST_TYPES_NEGATIVE,
  CONST_ROUTES_TEST_TYPES_POSITIVE,
} from '@app/config/consts';

const NOT_FOUND = 'Not found';

export const routerBuilder = (
  responsePositive: string,
  responseNegative?: string,
  baseRoute: string = CONST_ROUTES_BASE,
): IRouter => {
  const router = express.Router({ mergeParams: true });

  router.get(baseRoute, async (req: Request, res: Response) => {
    const { testType } = req.params;
    let response = NOT_FOUND;

    switch (testType) {
      case CONST_ROUTES_TEST_TYPES_POSITIVE:
        response = responsePositive;
        break;
      case CONST_ROUTES_TEST_TYPES_NEGATIVE:
        if (typeof responseNegative !== 'undefined') {
          response = responseNegative;
        }
        break;
    }

    if (response !== NOT_FOUND) {
      res.send(response);
    } else {
      res.status(404).send(response);
    }
  });

  return router;
};
