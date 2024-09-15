
import { useMapData } from "@mappedin/react-sdk";
import { BrowserRouter as Router, Route, Routes, /*useLocation, useSearchParams*/ } from "react-router-dom";
import "@mappedin/react-sdk/lib/esm/index.css";
// import FloorSelector from "./FloorSelector";
// import CustomLabels from "./Label";
import FloorNavigation from "./FloorNavigation";
import FloorView from "./FloorView";
import FloorNavigationSteps from "./FloorNavigationSteps";


export default function App() {
  // See Demo API key Terms and Conditions
  // https://developer.mappedin.com/v6/demo-keys-and-maps/
  const { isLoading, error } = useMapData({
    key: 'mik_Qar1NBX1qFjtljLDI52a60753',
    secret: 'mis_CXFS9WnkQkzQmy9GCt4ucn2D68zNRgVa2aiJj5hEIFM8aa40fee',
    mapId: '66ce20fdf42a3e000b1b0545'
  });

  if (isLoading) {
    return <div style={{fontSize:250,}}>Loading...</div>;
  }

  if (error) {
    return <div>{error.message}</div>;
  }

  return (
    <Router>
      <Routes>
        <Route path="/navigate/:x/:y/:target" element={
          <FloorNavigation/>
        }/>
        <Route path="/view/:x/:y" element={
          <FloorView/>
        }/>
        <Route path="/navigate/:x/:y/:target/steps" element={
          <FloorNavigationSteps/>
        }/>
      </Routes>
    </Router>
  );
}