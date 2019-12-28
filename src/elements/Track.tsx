import React from 'react';
import { trackHeights, TrackType, trackWidths } from './Track.models';
import { Box } from 'rebass';

interface Props {
  type: TrackType;
}

function Track({ type }: Props) {
 return (
  <Box width={trackWidths[type]} height={trackHeights[type]} backgroundColor={'black'}>
   
  </Box>
 );
};

export default Track;