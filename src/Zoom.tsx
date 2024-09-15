import { useMap } from "@mappedin/react-sdk";
import { useEffect, useState } from "react";

interface CameraEventsProps{
  x: number;
  y: number;
};

export default function CameraEvents(props: CameraEventsProps) {
  const { mapView, mapData } = useMap();
  const [] = useState(
    Math.round(mapView.Camera.zoomLevel)
  );
  
  const initialZoomLevel = 21;  // Set your desired initial zoom level here

  useEffect(() => {
    if (mapView && mapData) {
      // Set initial zoom level and center the camera when the map loadsƒ
      mapView.Camera.animateTo(
        {
          center: mapView.createCoordinate(props.x, props.y),
          zoomLevel: initialZoomLevel,  // Use the initial zoom level
        },
        { duration: 0 }  // No animation on initial load
      );

      // Make all spaces interactive to detect in the click event
      mapData.getByType("space").forEach((space) => {
        mapView.updateState(space, {
          interactive: true,
          hoverColor: "lightgrey",
        });
      });
    }
  }, [mapView, mapData, initialZoomLevel]);

  return (
    <div
      style={{
        position: "absolute",
        top: "10px",
        left: "10px",
        zIndex: 1000,
        display: "flex",
        alignItems: "center",
        gap: "8px",
        color: 'black',
        padding: "10px",
        borderRadius: "5px",
        boxShadow: "0px 0px 5px rgba(0, 0, 0, 0.2)",
      }}
    >
      <button
        onClick={() => {
          mapView.Camera.animateTo(
            {
              center: mapView.Camera.center,
              zoomLevel: mapView.Camera.zoomLevel + 1,
            },
            { duration: 1000 }
          );
        }}
      >
        Zoom In
      </button>
      <button
        onClick={() => {
          mapView.Camera.animateTo(
            {
              center: mapView.Camera.center,
              zoomLevel: mapView.Camera.zoomLevel - 1,
            },
            { duration: 1000 }
          );
        }}
      >
        Zoom Out
      </button>
    </div>
  );
}
