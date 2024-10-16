import {
  IHandlerOutputImagePackHeader,
  IHandlerOutputImagePackHeaderLink,
  IHandlerOutputImagePackHeaderText,
} from '@app/interfaces/core/parsers/features/imagePack/imagePackHeader';
import {
  IHandlerOutputImagePackItem,
  IHandlerOutputImagePackItemFooter,
  IHandlerOutputImagePackItemFooterIcon,
  IHandlerOutputImagePackItemLink,
  IHandlerOutputImagePackItemFooterText,
  IHandlerOutputImagePackItemImg,
  IHandlerOutputImagePackItemImgSrc,
  IHandlerOutputImagePackItemImgText,
} from '@app/interfaces/core/parsers/features/imagePack/imagePackItem';
import { IHandlerOutputImagePackItems } from '@app/interfaces/core/parsers/features/imagePack';
import { IHandlerOutputImagePack } from '@app/interfaces/core/parsers/features/imagePack';
import {
  IHandlerOutputOrganicItemHeader,
  IHandlerOutputOrganicItemHeaderBreadcrumbs,
  IHandlerOutputOrganicItemHeaderDomain,
  IHandlerOutputOrganicItemHeaderIcon,
  IHandlerOutputOrganicItemHeaderLink,
  IHandlerOutputOrganicItemHeaderTitle,
} from '@app/interfaces/core/parsers/organic/organicItemHeader';
import { IHandlerOutputOrganicItemBody } from '@app/interfaces/core/parsers/organic/organicItemBody';
import { IHandlerOutputOrganicItem, IHandlerOutputOrganicItems } from '@app/interfaces/core/parsers/organic';
import {
  IHandlerOutputOrganicItemFooter,
  IHandlerOutputOrganicItemFooterProsCons,
  IHandlerOutputOrganicItemFooterSecondaryRef,
  IHandlerOutputOrganicItemFooterSecondaryRefs,
} from '@app/interfaces/core/parsers/organic/organicItemFooter';

import { IHandlerOutputFeatures } from '@app/interfaces/core/parsers/features';
import { IHandlerOutputRoot } from '@app/interfaces/core/parsers';

export type IHandlerOutput =
  | IHandlerOutputImagePackHeader
  | IHandlerOutputImagePackHeaderLink
  | IHandlerOutputImagePackHeaderText
  | IHandlerOutputImagePackItem
  | IHandlerOutputImagePackItemFooter
  | IHandlerOutputImagePackItemFooterIcon
  | IHandlerOutputImagePackItemLink
  | IHandlerOutputImagePackItemFooterText
  | IHandlerOutputImagePackItemImg
  | IHandlerOutputImagePackItemImgSrc
  | IHandlerOutputImagePackItemImgText
  | IHandlerOutputImagePackItems
  | IHandlerOutputImagePack
  | IHandlerOutputOrganicItemHeader
  | IHandlerOutputOrganicItemHeaderBreadcrumbs
  | IHandlerOutputOrganicItemHeaderDomain
  | IHandlerOutputOrganicItemHeaderIcon
  | IHandlerOutputOrganicItemHeaderLink
  | IHandlerOutputOrganicItemHeaderTitle
  | IHandlerOutputOrganicItemBody
  | IHandlerOutputOrganicItem
  | IHandlerOutputOrganicItems
  | IHandlerOutputOrganicItemFooter
  | IHandlerOutputOrganicItemFooterProsCons
  | IHandlerOutputOrganicItemFooterSecondaryRef
  | IHandlerOutputOrganicItemFooterSecondaryRefs
  | IHandlerOutputFeatures
  | IHandlerOutputRoot;
