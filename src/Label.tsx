import React from "react";
import { MapView, useMapData, useMap, Label } from "@mappedin/react-sdk";
import { BrowserRouter as Router, Route, Routes, useLocation, useSearchParams } from "react-router-dom";
import "@mappedin/react-sdk/lib/esm/index.css";
import FloorSelector from "./FloorSelector";

export default function CustomLabels() {
    const { mapData } = useMap();
  
    return mapData.getByType("space").map((space) => {
      return <Label target={space.center} text={space.name} />;
    });
  }
