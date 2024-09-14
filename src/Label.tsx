
import { useMap, Label } from "@mappedin/react-sdk";
import "@mappedin/react-sdk/lib/esm/index.css";

export default function CustomLabels() {
    const { mapData } = useMap();
  
    return mapData.getByType("space").map((space) => {
      return <Label target={space.center} text={space.name} />;
    });
  }
