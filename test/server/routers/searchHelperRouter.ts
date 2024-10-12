import express, { Request, Response } from 'express';
import { IRouter } from '@app/interfaces/api';
import { CONST_ROUTES_BASE } from '@app/config/consts';
import {
  searchHelperMockHtmlNegative,
  searchHelperMockHtmlPositive,
} from '@appTest/mocks/core/websites/helpers';

const router = express.Router({ mergeParams: true });

export const searchHelperRouter: IRouter = router.get(
  CONST_ROUTES_BASE,
  async (req: Request, res: Response) => {
      const { testType } = req.params;

      if (testType === 'positive') {
        res.send(searchHelperMockHtmlPositive);
      } else {
        res.send(searchHelperMockHtmlNegative);
      }
  },
);