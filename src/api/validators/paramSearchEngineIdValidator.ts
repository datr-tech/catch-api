import { param } from 'express-validator';
import { CONST_PARAM_SEARCH_ENGINE_ID } from '@app/config/consts';
import { SearchEngineIdEnum } from '@app/config/enums';
import { IValidator } from '@app/interfaces/api';

export const paramSearchEngineIdValidator: IValidator = param(CONST_PARAM_SEARCH_ENGINE_ID)
  .notEmpty()
  .isString()
  .trim()
  .custom((searchEngineId) => Object.values(SearchEngineIdEnum).includes(searchEngineId));
