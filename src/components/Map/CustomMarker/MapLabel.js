import React from 'react';
import { Marker } from 'react-naver-maps';

const MapLabel = ({ children, navermaps, position, onClick }) => {
  const icon = {
    content: `<div class="styledMarker"><p>${children}</p></div>`,
    size: new navermaps.Size(0, 0),
    anchor: new navermaps.Point(40, 8),
  };

  return <Marker onClick={onClick} icon={icon} position={position} />;
};

export default MapLabel;
