// import jsdom from 'jsdom';
import { IParserFeatureImagePack } from '@app/interfaces/core/parsers/features/imagePack';

// const { JSDOM } = jsdom;

export const imagePackFeatureParser: IParserFeatureImagePack = ({ html }) => {
  return {
    title: 'ABC',
  };
};
