import { param } from 'express-validator';
import { CONSTS_PARAMS_SEARCH_TERM } from '@app/config/consts/params';
import { IValidator } from '@app/interfaces/api';

export const paramSearchTermValidator: IValidator = param(CONSTS_PARAMS_SEARCH_TERM).notEmpty().isString().trim();
