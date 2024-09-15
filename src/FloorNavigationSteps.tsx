
import { MapView, useMapData } from "@mappedin/react-sdk";
import { useParams } from "react-router-dom";
import "@mappedin/react-sdk/lib/esm/index.css";
import DrawNavigationSteps from "./MoveNavigation";

export default function FloorNavigationSteps() {
    // See Demo API key Terms and Conditions
    // https://developer.mappedin.com/v6/demo-keys-and-maps/
    const { isLoading, error, mapData } = useMapData({
        key: 'mik_Qar1NBX1qFjtljLDI52a60753',
        secret: 'mis_CXFS9WnkQkzQmy9GCt4ucn2D68zNRgVa2aiJj5hEIFM8aa40fee',
        mapId: '66ce20fdf42a3e000b1b0545'
    });

    const { x, y, target } = useParams();

    if (isLoading) {
        return <div style={{fontSize:250,}}>NAN</div>;
    }

    if (error) {
        return <div>{error.message}</div>;
    }

    const xCoord = x ? parseFloat(x) : parseFloat("0");
    const yCoord = y ? parseFloat(y) : parseFloat("0");
    

    return (
        mapData ? (
            <MapView mapData={mapData}>
              <DrawNavigationSteps x={xCoord} y={yCoord} target={target + ""}/>
            </MapView>
          ) : <div>No map exists</div>
    );
} 