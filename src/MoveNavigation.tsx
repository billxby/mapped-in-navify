import { 
    useMap, 
} from "@mappedin/react-sdk";
import { TDirectionInstruction } from "@mappedin/react-sdk/mappedin-js/src";

interface DrawNavigationStepsProps {
    x: number;
    y: number;
    target: string;
};

export default function DrawNavigationSteps(props: DrawNavigationStepsProps) {
    const { mapData, mapView } = useMap();
    const space2 = mapData.getByType("space").filter((space) => space.id == props.target)[0];
    const space1 = mapView.createCoordinate(props.x, props.y);

    if (space1 != undefined && space2 != undefined) {
        const directions = mapView.getDirections(space1, space2);

        console.log(directions?.instructions);

        if (directions) {
            // Extracting direction instructions
            const instructions = directions.instructions.map((instruction: TDirectionInstruction) => ({
                bearing: instruction.action.bearing,
                type: instruction.action.type,
                distance: instruction.distance
            }));

            console.log(instructions)

            console.log(JSON.stringify(instructions));

            // mapView.Markers.add(space2, '<div>' + JSON.stringify(instructions) + '</div>');

            // Return JSON containing instructions
            
            return <div className="ChrisMcdonaldsTheGoat">
               {JSON.stringify(instructions)}
            </div>;
        }
    }
    return <div className="ChrisMcdonaldsTheGoat">
        NAN
    </div>;
}
