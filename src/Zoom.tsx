import { useEvent, useMap } from "@mappedin/react-sdk";
import { useEffect, useState } from "react";

export default function CameraEvents() {
  const { mapView, mapData } = useMap();
  const [zoomLevel, setZoomLevel] = useState(
    Math.round(mapView.Camera.zoomLevel)
  );
  
  const initialZoomLevel = 19;  // Set your desired initial zoom level here

  useEffect(() => {
    if (mapView && mapData) {
      // Set initial zoom level and center the camera when the map loads
      mapView.Camera.animateTo(
        {
          center: mapView.Camera.center,
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

  useEvent("camera-change", (event) => {
    console.log(
      "camera-change",
      event.bearing,
      event.pitch,
      event.zoomLevel,
      event.center
    );
    setZoomLevel(Math.round(event.zoomLevel));
    console.log(zoomLevel);
  });

  useEvent("click", (event) => {
    const { labels, spaces } = event;
    if (labels.length === 0 && spaces.length >= 1) {
      mapView.Camera.focusOn(spaces);
    }
  });

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
      <p>{zoomLevel}</p>
    </div>
  );
}
