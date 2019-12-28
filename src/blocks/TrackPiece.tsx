import React, { Fragment, useState } from 'react';
import { Box, Flex } from 'rebass';
import Track from '../elements/Track';
import { TrackType } from '../elements/Track.models';
import TrackSelector from './TrackSelector';

interface Props {
  main?: TrackType;
}

function TrackPiece({ main: mainPiece }: Props) {
  const [{ main, top, right, bottom, left }, setTracks] = useState<{
    main?: TrackType;
    top?: TrackType;
    right?: TrackType;
    bottom?: TrackType;
    left?: TrackType;
  }>({
    main: mainPiece,
    top: undefined,
    right: undefined,
    bottom: undefined,
    left: undefined,
  });

  const handleSetTrack = (propName: string) => (track: TrackType) => {
    setTracks({
      main,
      top,
      right,
      bottom,
      left,
      [propName]: track,
    });
  };

  const renderSide = (side: string, track?: TrackType) => {
    if (!main) {
      return null;
    }

    const otherSide: any = {
      top: 'left',
      right: 'top',
      bottom: 'left',
      left: 'top',
    };

    return (
      <Flex
        justifyContent="center"
        css={`
          height: 100%;
          position: absolute;
          width: 100%;
          ${side}: -110%;
          ${otherSide[side]}: 0;
        `}
      >
        {(track && <TrackPiece main={track} />) || (
          <TrackSelector onSelect={handleSetTrack(side)} />
        )}
      </Flex>
    );
  };

  return (
    <Box
      css={`
        display: inline-block;
        position: relative;
      `}
    >
      {(main && <Track type={main} />) || (
        <TrackSelector onSelect={handleSetTrack('main')} />
      )}
      {renderSide('top', top)}
      {renderSide('right', right)}
      {renderSide('bottom', bottom)}
      {renderSide('left', left)}
    </Box>
  );
}

export default TrackPiece;
