
import { useMap} from "@mappedin/react-sdk";
import "@mappedin/react-sdk/lib/esm/index.css";

export default function HoverFloor() {
    const { mapData, mapView } = useMap();
  
    mapData.getByType('space').forEach(space => {
        mapView.updateState(space, {
            interactive: true,
            hoverColor: 'blue',
        });
    });

    return null;
  }
