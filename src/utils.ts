import { select } from '@storybook/addon-knobs';

export function mergeRefs<T>(refs: Array<React.Ref<T | null | undefined>>) {
  return (element: T) => {
    refs
      .filter(ref => ref != null)
      .forEach(ref => {
        if (typeof ref === 'function') {
          ref(element);
        } else if (ref != null) {
          (ref as React.MutableRefObject<T>).current = element;
        }
      });
  };
}

export function capitalize(text: string) {
  if (!text.length) {
    throw new Error('Text must have at least one character');
  }

  return text[0].toLocaleUpperCase() + text.slice(1);
}

export function createKnobsSelectOptions<T>(keys: T[]) {
  const tuples = keys.map(key => [key, key]);
  return {
    ...Object.fromEntries(tuples),
    undefined: undefined
  };
}

export function booleanSelectKnob(label: string) {
  return select(
    label,
    {
      true: true as any,
      false: false as any,
      null: null
    },
    null
  );
}
