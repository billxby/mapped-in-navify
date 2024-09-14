
import { useMap, } from "@mappedin/react-sdk";
import { useNavigate } from "react-router-dom";
import "@mappedin/react-sdk/lib/esm/index.css";


interface ClickPointsProps{
    id: string;
};

export default function ClickPoints({ id } : ClickPointsProps) {
    const { mapView } = useMap();
    const navigate = useNavigate();
  
    mapView.on('click', async e => {
        // console.log('Clicked: Lat: ' + e.coordinate.latitude + ' Lon: ' + e.coordinate.longitude);

        // console.log(id);

        // console.log(e.spaces);
        // console.log(e.spaces[0]);
        // console.log(e.spaces[0].id);
        // if (e.spaces[0].name) {
        //     console.log(e.spaces[0].name);
        // }
        
        navigate("/navigate/" + id + "/" + (e.spaces[0].id));

        // if (e.spaces[0].name) {
        //     mapView.Labels.add(e.coordinate, e.spaces[0].name);
        // } else {
        //     mapView.Labels.add(e.coordinate, 'Clicked: Lat: ' + e.coordinate.latitude + ' Lon: ' + e.coordinate.longitude);
        // }
    });

    return null;
  }
