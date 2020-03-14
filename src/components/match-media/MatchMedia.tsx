import React from 'react';
import { Dictionary } from 'types';
import { Props, Query } from './types';

// Use this reference as the initial state, rather than
// an unassigned object, so we can strict equality check later.
const initialDictionaryMatchState = {};

export function MatchMedia<Q extends Query>({ query, children }: Props<Q>) {
  const matchListRef = React.useRef<
    MediaQueryList | Dictionary<MediaQueryList>
  >();
  const [isMatch, setIsMatch] = React.useState<
    boolean | Dictionary<boolean> | undefined
  >(typeof query === 'string' ? undefined : initialDictionaryMatchState);

  const handleMediaQueryListEvent = React.useCallback(
    (e: MediaQueryListEvent) => {
      if (!matchListRef.current) {
        return;
      }

      if (matchListRef.current instanceof MediaQueryList) {
        setIsMatch(e.matches);
        return;
      }

      // matchListRef is a dictionary of MediaQueryLists.
      const queryListDict = matchListRef.current;

      const nextIsMatch = Object.keys(queryListDict).reduce((dict, key) => {
        dict[key] = queryListDict[key]!.matches;
        return dict;
      }, {} as Dictionary<boolean>);

      setIsMatch(nextIsMatch);
    },
    []
  );

  // Attach the MediaQueryList listeners.
  React.useEffect(() => {
    if (typeof query === 'string') {
      // matchListRef must be a single MediaQueryList.
      matchListRef.current = window.matchMedia(query);
      matchListRef.current.addListener(handleMediaQueryListEvent);
      setIsMatch(matchListRef.current.matches);
    } else {
      // matchListRef must be a dictionary of MediaQueryLists.
      matchListRef.current = Object.keys(query).reduce((dict, key) => {
        dict[key] = window.matchMedia(
          (query as Dictionary<string>)[key] as string
        );
        return dict;
      }, {} as Dictionary<MediaQueryList>);

      const queryListDict = matchListRef.current;

      Object.keys(queryListDict).forEach(key => {
        (queryListDict[key] as MediaQueryList).addListener(
          handleMediaQueryListEvent
        );
      });

      setIsMatch(
        Object.keys(queryListDict).reduce((boolDict, key) => {
          boolDict[key] = (queryListDict[key] as MediaQueryList).matches;
          return boolDict;
        }, {} as Dictionary<boolean>)
      );
    }

    // Remove the MediaQueryList listeners.
    return () => {
      if (!matchListRef.current) {
        return;
      }

      if (matchListRef.current instanceof MediaQueryList) {
        matchListRef.current.removeListener(handleMediaQueryListEvent);
        return;
      }

      // matchListRef is a dictionary of MediaQueryLists.
      const queryListDict = matchListRef.current;

      Object.keys(queryListDict).forEach(key => {
        (queryListDict[key] as MediaQueryList).removeListener(
          handleMediaQueryListEvent
        );
      });
    };
  }, [query, handleMediaQueryListEvent]);

  if (
    isMatch === undefined ||
    isMatch === initialDictionaryMatchState ||
    !children
  ) {
    // If isMatch is an initial, undefined state, that means
    // the media query checks have not finished running yet, so
    // we render nothing.
    return null;
  }

  return <>{children(isMatch as any)}</>;
}
