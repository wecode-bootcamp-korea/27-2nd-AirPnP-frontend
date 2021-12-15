import React, { useEffect, useRef, useState } from 'react';
import { NaverMap, RenderAfterNavermapsLoaded } from 'react-naver-maps';
import styled from 'styled-components';
import MapLabel from './CustomMarker/MapLabel';

const Map = () => {
  const [geoInfo, setGeoInfo] = useState({});
  const mapRef = useRef();
  const navermaps = window.naver.maps;

  useEffect(() => {
    getLocation();
  }, []);

  const getLocation = () => {
    navigator.geolocation.getCurrentPosition(
      position => {
        setGeoInfo({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        });
      },
      error => {
        console.error(error);
      }
    );
  };

  return (
    <RenderAfterNavermapsLoaded
      ncpClientId={process.env.REACT_APP_MAP_CLIENT_ID}
      error={<p>Maps Load Error</p>}
      loading={<p>Maps Loading...</p>}
    >
      {Object.keys(geoInfo).length && (
        <StyledNaverMap
          mapDivId="map"
          ref={mapRef}
          defaultCenter={geoInfo}
          defaultZoom={16}
          zoomControl={true}
          mapDataControl={false}
        >
          <MapLabel
            position={new navermaps.LatLng(37.506359, 127.053784)}
            onClick={() => {
              alert('위코드!');
            }}
            navermaps={navermaps}
          >
            20000
          </MapLabel>
          <MapLabel
            position={new navermaps.LatLng(37.363777, 127.1174332)}
            onClick={() => {
              alert('위코드!');
            }}
            navermaps={navermaps}
          >
            10000
          </MapLabel>
        </StyledNaverMap>
      )}
    </RenderAfterNavermapsLoaded>
  );
};

export default Map;

const StyledNaverMap = styled(NaverMap)`
  width: 50%;
  height: 400px;

  .styledDiv {
    padding: 4px 6px;
    background-color: white;
    box-shadow: 0 0 3px 0 ${({ theme }) => theme.middleGray};
    border-radius: 10px;
    font-size: 14px;
    transition: all 0.2s;

    &:hover {
      background-color: #222222;
      color: white;
    }
  }
`;
