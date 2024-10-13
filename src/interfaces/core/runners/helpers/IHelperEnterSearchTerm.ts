import { IHelperEnterSearchTermInput } from './IHelperEnterSearchTermInput';
import { IHelperEnterSearchTermOutput } from './IHelperEnterSearchTermOutput';

export interface IHelperEnterSearchTerm {
  (args: IHelperEnterSearchTermInput): Promise<IHelperEnterSearchTermOutput>;
}
