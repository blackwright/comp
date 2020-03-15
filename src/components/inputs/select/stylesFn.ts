import { DefaultTheme } from 'styled-components';
import { Styles as ReactSelectStyles } from 'react-select/src/styles';

export default function stylesFn({
  colors,
  transitions
}: DefaultTheme): ReactSelectStyles {
  return {
    control: (base, state) => ({
      ...base,
      borderColor: colors.gray1.hex,
      '&:hover': {
        borderColor: state.isFocused
          ? colors.variants.action.background.active.hex
          : colors.variants.action.background.hover.hex
      },
      transition: `border-color ${transitions.slow}`,
      boxShadow: 'none'
    }),
    option: (base, state) => ({
      ...base,
      color: state.isDisabled
        ? colors.variants.disabled.text.hex
        : state.isSelected
        ? colors.variants.action.text.hex
        : state.isFocused
        ? colors.white.hex
        : colors.text.dark.hex,
      background: state.isFocused
        ? colors.variants.action.background.hover.hex
        : state.isSelected
        ? colors.variants.action.background.passive.hex
        : colors.white.hex,
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap',
      '&:active': {
        color: colors.white.hex,
        background: state.isDisabled
          ? colors.white.hex
          : colors.variants.action.background.active.hex
      }
    })
  };
}
