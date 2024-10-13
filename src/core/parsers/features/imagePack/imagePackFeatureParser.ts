import jsdom from 'jsdom';
import { IParserFeatureImagePack } from '@app/interfaces/core/parsers/features/imagePack';

const { JSDOM } = jsdom;

export const imagePackFeatureParser: IParserFeatureImagePack = ({ html }) => {
  try {
    const { document } = new JSDOM(html).window;
    const imagePackWrapper = document.getElementsByClassName('Lv2Cle');
    const hasImagePack = imagePackWrapper.length > 0;

    const imagePackHeaderTitleWrapper = document.getElementsByClassName('T6zPgb YC72Wc');
    const hasImagePackHeaderTitleWrapper = imagePackHeaderTitleWrapper.length > 0;

    const imagePackSingleImageWrapper = document.getElementsByClassName('div.vCUuC');
    const hasImagePackSingleImageWrapper = imagePackSingleImageWrapper.length > 0;

    return {
      hasImagePack,
      hasImagePackHeaderTitleWrapper,
      hasImagePackSingleImageWrapper,
    };
  } catch (error) {
    const { message } = error;
    throw new Error(message);
  }
};
