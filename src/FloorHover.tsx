
import { useMap} from "@mappedin/react-sdk";
import "@mappedin/react-sdk/lib/esm/index.css";

export default function HoverFloor() {
    const { mapData, mapView } = useMap();
  
    mapData.getByType('space').forEach(space => {
        // if (space.name != "") {
        //     if (space.floor.id == "m_b4e5ebf844208588") {
        //         console.log(space.name + " : " + space.id);
        //     }
        // }

        mapView.updateState(space, {
            interactive: true,
            hoverColor: 'blue',
        });
    });

    return null;
  }
