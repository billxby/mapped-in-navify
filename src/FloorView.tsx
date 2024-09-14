
import { MapView, useMapData, } from "@mappedin/react-sdk";
import { useParams } from "react-router-dom";
import "@mappedin/react-sdk/lib/esm/index.css";
import FloorSelector from "./FloorSelector";
import CustomLabels from "./Label";
// import ClickPoints from "./Click";
// import HoverFloor from "./FloorHover";

export default function FloorView() {
    // See Demo API key Terms and Conditions
    // https://developer.mappedin.com/v6/demo-keys-and-maps/
    const { isLoading, error, mapData } = useMapData({
        key: 'mik_Qar1NBX1qFjtljLDI52a60753',
        secret: 'mis_CXFS9WnkQkzQmy9GCt4ucn2D68zNRgVa2aiJj5hEIFM8aa40fee',
        mapId: '66ce20fdf42a3e000b1b0545'
    });

    const { id } = useParams();

    if (isLoading) {
        return <div>Loading... {id}</div>;
    }

    if (error) {
        return <div>{error.message}</div>;
    }

    return (
        mapData ? (
            <MapView mapData={mapData}>
              <FloorSelector />
              <CustomLabels />
            </MapView>
          ) : <div>No map exists</div>
    );
} 