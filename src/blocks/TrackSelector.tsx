import React, { useState } from 'react';
import { Box, Button } from 'rebass';
import { TiPlus } from 'react-icons/ti';
import { trackNames, TrackType } from '../elements/Track.models';

interface Props {
  onSelect: (track: TrackType) => any;
}

function TrackSelector({ onSelect }: Props) {
  const [show, setShow] = useState(false);
  return (
    <Box>
      <Button onClick={() => setShow(!show)}>
        <TiPlus />
      </Button>
      {show && (
        <Box
          as={'select'}
          onChange={(event: any) => {
            if (event.target.value) {
              onSelect(event.target.value as TrackType);
            }
          }}
        >
          <option value="">Select a track piece</option>
          {trackNames.map(([value, name]) => (
            <option key={name} value={value}>
              {name}
            </option>
          ))}
        </Box>
      )}
    </Box>
  );
}

export default TrackSelector;
