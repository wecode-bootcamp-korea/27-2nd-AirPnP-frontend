import React from 'react';
import { Marker } from 'react-naver-maps';

const MapLabel = ({ children, navermaps, position }) => {
  const icon = {
    content: ['<div class="styledDiv">', `<p>₩ ${children}</p>`, '</div>'].join(
      ''
    ),
    size: new navermaps.Size(0, 0),
    anchor: new navermaps.Point(40, 8),
  };

  return <Marker icon={icon} position={position} />;
};

export default MapLabel;
