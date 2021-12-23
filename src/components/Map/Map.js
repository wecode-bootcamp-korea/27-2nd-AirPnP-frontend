import React, { useCallback, useEffect, useRef, useState } from 'react';
import { NaverMap, RenderAfterNavermapsLoaded } from 'react-naver-maps';
import styled from 'styled-components';
import MapLabel from './CustomMarker/MapLabel';

const Map = ({ longitude, latitude, posts, filterListByMap }) => {
  const [geoInfo, setGeoInfo] = useState({});
  const [markerLocation, setMarkerLocation] = useState([]);
  const mapRef = useRef();
  const navermaps = window.naver.maps;

  const setMarker = useCallback(() => {
    if (posts) {
      const result = {};
      for (let i of posts) {
        if (result[i.address]) {
          result[i.address].count += 1;
        } else {
          result[i.address] = {
            count: 0,
            latitude: i.latitude,
            longitude: i.longitude,
          };
        }
      }

      setMarkerLocation(Object.entries(result));
    }
  }, [posts]);

  const getLocation = useCallback(() => {
    if (longitude && latitude) {
      setGeoInfo({ lat: latitude, lng: longitude });
    } else {
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
    }
  }, [latitude, longitude]);

  useEffect(() => {
    setMarker();
    getLocation();
  }, [setMarker, getLocation]);

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
          {markerLocation.map(marker => {
            const address = marker[0];
            const { count, latitude, longitude } = marker[1];
            return (
              <MapLabel
                key={address}
                onClick={() => filterListByMap(address)}
                position={new navermaps.LatLng(latitude, longitude)}
                navermaps={navermaps}
              >
                {count}
              </MapLabel>
            );
          })}
        </StyledNaverMap>
      )}
    </RenderAfterNavermapsLoaded>
  );
};

export default Map;

const StyledNaverMap = styled(NaverMap)`
  width: 100%;
  height: 100%;

  .styledMarker {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50px;
    height: 50px;
    background-color: ${({ theme }) => theme.highlight};
    box-shadow: 0 0 3px 0 ${({ theme }) => theme.middleGray};
    border-radius: 30px;
    color: white;
    font-size: 18px;
    font-weight: 600;
    transition: all 0.2s;

    &:hover {
      background-color: white;
      color: black;
    }
  }
`;
