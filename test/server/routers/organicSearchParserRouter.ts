import express, { Request, Response } from 'express';
import { IRouter } from '@app/interfaces/api';
import { CONST_ROUTES_BASE } from '@app/config/consts';
import { organicSearchParserMockHtmlPositive } from '@appTest/mocks/core/parsers';

const router = express.Router({ mergeParams: true });

export const organicSearchParserRouter: IRouter = router.get(CONST_ROUTES_BASE, async (req: Request, res: Response) => {
  const { testType } = req.params;

  if (testType === 'positive') {
    res.send(organicSearchParserMockHtmlPositive);
  } else {
    res.status(404).send('Not Found');
  }
});
