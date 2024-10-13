import { resolve } from 'node:path';

export const CONSTS_PATHS_APP_ROOT = resolve('./');
export const CONSTS_PATHS_TEST_DIR = resolve(`${CONSTS_PATHS_APP_ROOT}`, 'test');
export const CONSTS_PATHS_TEST_FIXTURES_DIR = resolve(`${CONSTS_PATHS_TEST_DIR}`, 'fixtures');
