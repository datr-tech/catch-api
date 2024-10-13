import { CONST_PORTS_TEST_SERVER_DEFAULT } from '@app/config/consts/ports';

export const CONSTS_ROUTES_BASE = '/';
export const CONSTS_ROUTES_TEST_SERVER = `http://localhost:${process.env.SERVER_TEST_PORT || CONST_PORTS_TEST_SERVER_DEFAULT}`;
