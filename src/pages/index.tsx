import React, { useState } from 'react';
import { Box, Flex, Heading } from 'rebass';
import Layout from '../layout/Layout';
import TrackSelector from '../blocks/TrackSelector';
import { TrackType } from '../elements/Track.models';
import Track from '../elements/Track';
import TrackPiece from '../blocks/TrackPiece';

interface Props {}

function Index({}: Props) {
  return (
    <Layout>
      <Box p={10}>
        <Heading variant="h1" as={'h1'}>
          Build your own Railway!
        </Heading>
        <Flex alignItems="center" justifyContent={'center'}>
          <TrackPiece />
        </Flex>
      </Box>
    </Layout>
  );
}

export default Index;
