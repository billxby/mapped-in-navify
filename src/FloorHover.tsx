import React from "react";
import { MapView, useMapData, useMap, Label } from "@mappedin/react-sdk";
import { BrowserRouter as Router, Route, Routes, useLocation, useSearchParams } from "react-router-dom";
import "@mappedin/react-sdk/lib/esm/index.css";
import FloorSelector from "./FloorSelector";

export default function HoverFloor() {
    const { mapData, mapView } = useMap();
  
    return mapData.getByType('space').forEach(space => {
        mapView.updateState(space, {
            interactive: true,
            hoverColor: 'blue',
        });
    });
  }
