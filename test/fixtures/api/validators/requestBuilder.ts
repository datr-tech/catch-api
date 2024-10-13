import { Request } from 'express';

export const requestBuilder = (params: object = {}, body: object = {}): Request => {
  return {
    body,
    params,
  } as Request;
};
