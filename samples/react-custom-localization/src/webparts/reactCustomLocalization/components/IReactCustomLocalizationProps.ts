import { CultureInfo } from '@microsoft/sp-page-context';

export interface IReactCustomLocalizationProps {
  description: string;
  isDarkTheme: boolean;
  environmentMessage: string;
  hasTeamsContext: boolean;
  userDisplayName: string;
  strings: IReactCustomLocalizationWebPartStrings;
  cultureInfo: CultureInfo;
}
