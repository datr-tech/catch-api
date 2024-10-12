import { IHelperSubmitInput } from './IHelperSubmitInput';
import { IHelperSubmitOutput } from './IHelperSubmitOutput';

export interface IHelperSubmit {
  (args: IHelperSubmitInput): Promise<IHelperSubmitOutput>;
}
