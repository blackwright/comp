export function mergeRefs<T>(refs: Array<React.Ref<T>>) {
  return (element: T) => {
    refs.forEach(ref => {
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

export function createKnobsSelect<T>(keys: T[]) {
  const tuples = keys.map(key => [key, key]);
  return {
    ...Object.fromEntries(tuples),
    undefined: undefined
  };
}
