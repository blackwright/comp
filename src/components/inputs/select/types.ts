import {
  Props as ReactSelectProps,
  GroupedOptionsType,
  OptionsType
} from 'react-select';

export type Props<Option> = {
  /**
   * Prevents interaction.
   * @default false
   */
  disabled?: boolean;
} & ReactSelectProps<Option>;

export type Options<Option> = GroupedOptionsType<Option> | OptionsType<Option>;
