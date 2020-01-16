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
