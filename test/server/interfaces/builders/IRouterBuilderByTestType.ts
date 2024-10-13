import { IRouter } from '@app/interfaces/api';
import { IRouterBuilderByTestTypeInput } from './IRouterBuilderByTestTypeInput';

export interface IRouterBuilderByTestType {
  (args: IRouterBuilderByTestTypeInput): IRouter;
}
