import { 
    Navigation, useMap, 
} from "@mappedin/react-sdk";
import { TDirectionInstruction } from "@mappedin/react-sdk/mappedin-js/src";
// import { TDirectionInstruction } from "@mappedin/react-sdk/mappedin-js/src";
// import {
//     FlatList,
//     ListRenderItem,
//     SafeAreaView,
//     StyleSheet,
//     Text,
//     View,
// } from 'react-native';

interface DrawNavigationProps {
    x: number;
    y: number;
    target: string;
};

export default function DrawNavigation(props: DrawNavigationProps) {
    const { mapData, mapView } = useMap();

    // console.log(props.id);
    // console.log(props.target);

    // const space1 = mapData.getByType("space").filter((space) => space.id == props.id)[0];
    const space2 = mapData.getByType("space").filter((space) => space.id == props.target)[0];
    const space1 = mapView.createCoordinate(props.x, props.y);
    
    // console.log(space2.floor);

    // mapData.getByType("space").forEach(space => {
    //     // console.log(space.id);

    //     if (space.id == id) {
    //         console.log(space.id);
    //         console.log(id);
    //     }

    // });

    // console.log(space1);
    // console.log(space2);
    // print(space2);

    //   const space1 = mapData
    //     .getByType("space")
    //     .filter((space) => space.floor.id === mapView.currentFloor.id)[0];
    // const space2 = mapData
    //     .getByType("space")
    //     .filter((space) => space.floor.id === mapView.currentFloor.id)[10];

    console.log(space1);
    
    if (space1 != undefined && space2 != undefined) {
        const directions = mapView.getDirections(space1, space2);

        // const renderItem: ListRenderItem<TDirectionInstruction> = ({item: step}) => (
        //     <Text>{step.action.type} + " " + {step.action.direction} + " " + {step.distance}</Text>
        // );

        if (directions) {
            // Extracting direction instructions
            const instructions = directions.instructions.map((instruction: TDirectionInstruction) => ({
                bearing: instruction.action.bearing,
                type: instruction.action.type,
                distance: instruction.distance
            }));

            console.log(JSON.stringify(instructions));
        
        }

        return directions ? 
            <div>
                <Navigation directions={directions} /> 
                {/* <FlatList data={directions?.instructions} renderItem={renderItem}></FlatList> */}
            </div>
            : null;
    }
    return <div/>;
}

// const styles = StyleSheet.create({
//     step: {
//         flex: 1,
//         backgroundColor: 'whitesmoke',
//         padding: 16,
//         marginVertical: 4,
//     },
//     fullSafeAreaView: {
//         flex: 1,
//     },
//     mapView: {
//         flex: 1,
//     },
//     directionsView: {
//         flex: 1,
//     },
// });