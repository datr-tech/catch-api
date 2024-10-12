import { param } from 'express-validator';
import { CONST_PARAM_WEBSITE_ID } from '@app/config/consts';
import { WebsiteIdEnum } from '@app/config/enums';
import { IValidator } from '@app/interfaces/api';

export const paramWebsiteIdValidator: IValidator = param(CONST_PARAM_WEBSITE_ID)
  .notEmpty()
  .isString()
  .trim()
  .custom((siteId) => Object.values(WebsiteIdEnum).includes(siteId));
