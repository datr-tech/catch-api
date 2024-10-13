import express, { Request, Response } from 'express';
import { CONSTS_ROUTES_BASE } from '@app/config/consts/routes';
import { IRouter } from '@app/interfaces/api';
import { IRouterBuilderByTestType } from '@appTest/server/interfaces/builders';

const NOT_FOUND = 'Not found';

export const routerBuilderByTestType: IRouterBuilderByTestType = ({
  filesToServeByTestType,
  baseRoute = CONSTS_ROUTES_BASE,
}): IRouter => {
  const router = express.Router({ mergeParams: true });

  router.get(baseRoute, async (req: Request, res: Response) => {
    const { testType } = req.params;
    const fileToServe = filesToServeByTestType.find((file) => file.testType === testType);

    if (typeof fileToServe !== 'undefined') {
      const { filePath } = fileToServe;
      res.sendFile(filePath);
    } else {
      res.status(404).send(NOT_FOUND);
    }
  });

  return router;
};
