import React from 'react';
import { Props } from './types';

export const MatchMedia: React.FC<Props> = ({ query, children }) => {
  const matchListRef = React.useRef<MediaQueryList>();
  const [isMatch, setIsMatch] = React.useState<boolean>();

  const handleMediaQueryListEvent = React.useCallback(
    (e: MediaQueryListEvent) => {
      setIsMatch(e.matches);
    },
    []
  );

  React.useEffect(() => {
    matchListRef.current = window.matchMedia(query);
    matchListRef.current.addListener(handleMediaQueryListEvent);
    setIsMatch(matchListRef.current.matches);

    return () => {
      if (matchListRef.current) {
        matchListRef.current.removeListener(handleMediaQueryListEvent);
      }
    };
  }, [query]);

  if (isMatch === undefined || !children) {
    return null;
  }

  return <>{children(isMatch)}</>;
};
