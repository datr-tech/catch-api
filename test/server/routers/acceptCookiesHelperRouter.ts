import express, { Request, Response } from 'express';
import { IRouter } from '@app/interfaces/api';
import { CONST_ROUTES_BASE } from '@app/config/consts';
import {
  acceptCookiesHelperMockHtmlNegative,
  acceptCookiesHelperMockHtmlPositive,
} from '@appTest/mocks/core/websites/helpers';

const router = express.Router({ mergeParams: true });

export const acceptCookiesHelperRouter: IRouter = router.get(
  CONST_ROUTES_BASE,
  async (req: Request, res: Response) => {
      const { testType } = req.params;

      if (testType === 'positive') {
        res.send(acceptCookiesHelperMockHtmlPositive);
      } else {
        res.send(acceptCookiesHelperMockHtmlNegative);
      }
  },
);