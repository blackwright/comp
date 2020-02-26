import React from 'react';
import { MatchMedia } from './MatchMedia';

export default {
  title: 'Util/MatchMedia',
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
      <React.Fragment key={query}>
        <div>
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
      </React.Fragment>
    ))}
  </>
);
ConditionalRender.story = {
  name: 'Conditional render'
};
