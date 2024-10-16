import { IHandlerOutputOrganicItemHeaderBreadcrumbs } from './IHandlerOutputOrganicItemHeaderBreadcrumbs';
import { IHandlerOutputOrganicItemHeaderDomain } from './IHandlerOutputOrganicItemHeaderDomain';
import { IHandlerOutputOrganicItemHeaderIcon } from './IHandlerOutputOrganicItemHeaderIcon';
import { IHandlerOutputOrganicItemHeaderLink } from './IHandlerOutputOrganicItemHeaderLink';
import { IHandlerOutputOrganicItemHeaderTitle } from './IHandlerOutputOrganicItemHeaderTitle';

export type IHandlerOutputOrganicItemHeader = {
  breadcrumbs: IHandlerOutputOrganicItemHeaderBreadcrumbs;
  domain: IHandlerOutputOrganicItemHeaderDomain;
  icon: IHandlerOutputOrganicItemHeaderIcon;
  link: IHandlerOutputOrganicItemHeaderLink;
  title: IHandlerOutputOrganicItemHeaderTitle;
};
