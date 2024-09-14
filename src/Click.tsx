import React from "react";
import { MapView, useMapData, useMap, Label } from "@mappedin/react-sdk";
import { BrowserRouter as Router, Route, Routes, useLocation, useSearchParams } from "react-router-dom";
import "@mappedin/react-sdk/lib/esm/index.css";
import FloorSelector from "./FloorSelector";

export default function ClickPoints() {
    const { mapView } = useMap();
  
    return mapView.on('click', async e => {
        console.log('Clicked: Lat: ' + e.coordinate.latitude + ' Lon: ' + e.coordinate.longitude);

        // if (e.spaces[0].name) {
        //     mapView.Labels.add(e.coordinate, e.spaces[0].name);
        // } else {
        //     mapView.Labels.add(e.coordinate, 'Clicked: Lat: ' + e.coordinate.latitude + ' Lon: ' + e.coordinate.longitude);
        // }
    });
  }
