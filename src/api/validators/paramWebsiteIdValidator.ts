import { param } from 'express-validator';
import { CONSTS_PARAMS_WEBSITE_ID } from '@app/config/consts';
import { WebsiteIdEnum } from '@app/config/enums';
import { IValidator } from '@app/interfaces/api';

export const paramWebsiteIdValidator: IValidator = param(CONSTS_PARAMS_WEBSITE_ID)
  .notEmpty()
  .isString()
  .trim()
  .custom((siteId) => Object.values(WebsiteIdEnum).includes(siteId));
