import { jestConstTestFixturesDir, jestConstAppRoot, jestConstTestDir } from './paths';

global.JEST_CONST_APP_ROOT = jestConstAppRoot;
global.JEST_CONST_TEST_DIR = jestConstTestDir;
global.JEST_CONST_TEST_FIXTURES_DIR = jestConstTestFixturesDir;
