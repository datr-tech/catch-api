import { IAssertionURL } from '@app/interfaces/core/assertions';

export const assertURL: IAssertionURL = ({ url }) => {
  try {
    new URL(url);
  } catch (error) {
    const { message } = error;
    throw new TypeError(message);
  }
};
