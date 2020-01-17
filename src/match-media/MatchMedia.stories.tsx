import React from 'react';
import { MatchMedia } from './MatchMedia';

export default {
  title: 'MatchMedia',
  component: MatchMedia
};

const mediaQueries = [
  'only screen and (max-width: 400px)',
  'only screen and (min-width: 300px) and (max-width: 800px)',
  'only screen and (min-width: 700px)'
];

export const ConditionalRender = () => (
  <>
    {mediaQueries.map(query => (
      <>
        <div key={query}>
          {query} match:{' '}
          <MatchMedia query={query}>
            {isMatch =>
              isMatch ? (
                <span style={{ color: 'green' }}>true</span>
              ) : (
                <span style={{ color: 'red' }}>false</span>
              )
            }
          </MatchMedia>
        </div>
      </>
    ))}
  </>
);
ConditionalRender.story = {
  name: 'Conditional render'
};
