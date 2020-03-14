import React from 'react';
import { MatchMedia } from './MatchMedia';

export default {
  title: 'Util/MatchMedia',
  component: MatchMedia
};

const singleQuery = 'only screen and (min-width: 300px) and (max-width: 800px)';

export const SingleQuery = () => (
  <MatchMedia query={singleQuery}>
    {isMatch => (
      <>
        <span>{singleQuery}: </span>
        {isMatch ? (
          <span style={{ color: 'green' }}>true</span>
        ) : (
          <span style={{ color: 'red' }}>false</span>
        )}
      </>
    )}
  </MatchMedia>
);

SingleQuery.story = {
  name: 'Single query'
};

const multipleQueries = {
  sm: 'only screen and (max-width: 400px)',
  md: 'only screen and (min-width: 300px) and (max-width: 800px)',
  lg: 'only screen and (min-width: 700px)'
};

export const MultipleQueries = () => (
  <MatchMedia query={multipleQueries}>
    {matches =>
      (Object.keys(matches) as Array<keyof typeof multipleQueries>).map(
        queryKey => (
          <div key={queryKey} style={{ marginBottom: '8px' }}>
            <span>{multipleQueries[queryKey]}: </span>
            {matches[queryKey] ? (
              <span style={{ color: 'green' }}>true</span>
            ) : (
              <span style={{ color: 'red' }}>false</span>
            )}
          </div>
        )
      )
    }
  </MatchMedia>
);
