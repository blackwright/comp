import React from 'react';
import { withKnobs, text, object } from '@storybook/addon-knobs';
import { MatchMedia } from './MatchMedia';
import { Dictionary } from 'types';

export default {
  title: 'Util/MatchMedia',
  component: MatchMedia,
  decorators: [withKnobs]
};

const queryStyle = {
  padding: 8,
  background: 'black',
  color: 'white'
};

const matchResultStyle = {
  padding: 8,
  marginBottom: 8,
  background: 'lightGrey'
};

export const SingleQuery = () => {
  const query = text(
    'query',
    'only screen and (min-width: 300px) and (max-width: 800px)'
  );

  return (
    <MatchMedia query={query}>
      {isMatch => (
        <>
          <div style={queryStyle}>{query}</div>
          <div style={matchResultStyle}>
            <span>Matches: </span>
            {isMatch ? (
              <span style={{ color: 'green' }}>true</span>
            ) : (
              <span style={{ color: 'red' }}>false</span>
            )}
          </div>
        </>
      )}
    </MatchMedia>
  );
};

SingleQuery.story = {
  name: 'Single query'
};

export const MultipleQueries = () => {
  const query = object('query', {
    sm: 'only screen and (max-width: 400px)',
    md: 'only screen and (min-width: 300px) and (max-width: 800px)',
    lg: 'only screen and (min-width: 700px)'
  });

  return (
    <MatchMedia query={query}>
      {matches =>
        (Object.keys(matches) as Array<keyof typeof query>).map(queryKey => (
          <React.Fragment key={queryKey}>
            <div style={queryStyle}>{query[queryKey]}</div>
            <div style={matchResultStyle}>
              <span>{queryKey}: </span>
              {matches[queryKey] ? (
                <span style={{ color: 'green' }}>true</span>
              ) : (
                <span style={{ color: 'red' }}>false</span>
              )}
            </div>
          </React.Fragment>
        ))
      }
    </MatchMedia>
  );
};
