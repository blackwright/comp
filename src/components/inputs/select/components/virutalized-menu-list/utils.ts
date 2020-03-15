// We assume that the entire list is grouped if the first child is grouped
export function isGroupedList(children: any[]) {
  const firstChild = children[0];
  return !!(firstChild?.props?.data?.options?.length > 0);
}

export function getChildHeightUsingStyles({
  groupStyles,
  groupHeadingStyles,
  noOptionsMsgStyles,
  optionStyles,
  loadingMsgStyles
}: {
  groupStyles: React.CSSProperties;
  groupHeadingStyles: React.CSSProperties;
  noOptionsMsgStyles: React.CSSProperties;
  optionStyles: React.CSSProperties;
  loadingMsgStyles: React.CSSProperties;
}) {
  return function getHeight(child: any): number {
    const {
      props: {
        type,
        children,
        selectProps: { noOptionsMessage, loadingMessage }
      }
    } = child;

    if (type === 'option') {
      const { height = 40 } = optionStyles;
      return ensureIsNumber(height);
    } else if (type === 'group') {
      const { height = 24, marginBottom = 4 } = groupHeadingStyles;
      const { paddingTop = 8 } = groupStyles;
      return (
        ensureIsNumber(height) +
        ensureIsNumber(marginBottom) +
        ensureIsNumber(paddingTop)
      );
    } else if (
      typeof noOptionsMessage === 'function' &&
      children === noOptionsMessage()
    ) {
      const { height = 40 } = noOptionsMsgStyles;
      return ensureIsNumber(height);
    } else if (
      typeof loadingMessage === 'function' &&
      children === loadingMessage()
    ) {
      const { height = 40 } = loadingMsgStyles;
      return ensureIsNumber(height);
    } else {
      return 40;
    }
  };
}

export function ensureIsNumber(value: any): number {
  if (isNaN(value) || !isFinite(value)) {
    throw new Error(`Expected numerical style value, instead got: ${value}`);
  }
  return value;
}

export function sum(values: number[]): number {
  return values.reduce((acc, num) => acc + num, 0);
}
