import { 
    Label, useMap, 
} from "@mappedin/react-sdk";
// import { TDirectionInstruction } from "@mappedin/react-sdk/mappedin-js/src";
// import {
//     FlatList,
//     ListRenderItem,
//     SafeAreaView,
//     StyleSheet,
//     Text,
//     View,
// } from 'react-native';

interface LocationLabelProps {
    x: number;
    y: number;
};

export default function LocationLabel(props: LocationLabelProps) {
    const { mapView } = useMap();

    return <Label target={mapView.createCoordinate(props.x, props.y)} text="Your location"></Label>;
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