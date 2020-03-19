import { DefaultTheme } from 'styled-components';
import { Styles as ReactSelectStyles } from 'react-select/src/styles';

export default function stylesFn({
  colors,
  transitions
}: DefaultTheme): ReactSelectStyles {
  const hoveredOption = colors.blue2.hex;
  const focusedOption = colors.blue3.hex;
  const activeOption = colors.blue4.hex;

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
      color: colors.text.dark.hex,
      background: state.isFocused
        ? hoveredOption
        : state.isSelected
        ? focusedOption
        : colors.white.hex,
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap',
      '&:active': {
        background: state.isDisabled ? colors.white.hex : activeOption
      }
    })
  };
}
