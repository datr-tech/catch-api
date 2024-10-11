import { param } from 'express-validator';
import { CONST_PARAM_SEARCH_TERM } from '@app/config/consts';
import { IValidator } from '@app/interfaces/api';

export const paramSearchTermValidator: IValidator = param(CONST_PARAM_SEARCH_TERM).notEmpty().isString().trim();
