import { IHandlerInput } from './IHandlerInput';
import { IHandlerOutput } from './IHandlerOutput';

export interface IHandler {
  (args: IHandlerInput): Promise<IHandlerOutput>;
}
