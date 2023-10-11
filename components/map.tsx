"use client";
import { useState } from "react";
import Map, { NavigationControl, Marker } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { MdLocationOn } from "react-icons/Md";

export default function Maps() {
  const [isMounted, setIsMounted] = useState(false);
  return (
    <>
      {!isMounted && (
        // <SpinnerOverlayContainer>
        //   <SpinnerContainer />
        // </SpinnerOverlayContainer>
        <div>Loading</div>
      )}
      <Map
        initialViewState={{
          latitude: -6.3164,
          longitude: 39.2849,
          zoom: 9,
        }}
        style={{ height: "100%", width: "100%" }}
        mapStyle="mapbox://styles/techdevge/clnk8xwa9000j01p96k0y3qlk"
        mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX}
        onLoad={() => setIsMounted(true)}
        attributionControl={false}
        dragPan={true}
      >
        <Marker latitude={-6.295358850775228} longitude={39.28726067235228}>
          <MdLocationOn
            style={{ height: "32px", width: "32px", fill: "#d50032" }}
          />
          {/* <p>Zanzibar Campus</p> */}
        </Marker>
        <NavigationControl />
      </Map>
    </>
  );
}
