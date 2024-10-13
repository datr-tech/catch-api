import { IFileToServeByTestType } from './IFileToServeByTestType';

export interface IRouterBuilderByTestTypeInput {
  filesToServeByTestType: IFileToServeByTestType[];
  baseRoute?: string;
}
