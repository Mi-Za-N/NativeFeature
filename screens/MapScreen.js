import React, { useState, useEffect,useCallback } from "react";
import { TouchableOpacity, Text, StyleSheet, Platform } from 'react-native';
import MapView, { Marker} from "react-native-maps";
import Colors from  '../constants/Colors'


const MapScreen = props => { 
  // const initialLocation = props.navigation.getParam("initialLocation");
  // const readonly = props.route.params?.readonly ?? "true";
//  const [selectedLocation, setSelectedLocation] = useState(initialLocation;
 const [selectedLocation, setSelectedLocation] = useState();

  const mapRegion = {
    latitude:  37.78,
    longitude: -122.43,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  };

  const selectLocationHandler = (event) => {
    // if (readonly) { 
    //   return;
    // }
       setSelectedLocation({
      lat: event.nativeEvent.coordinate.latitude,
      lng: event.nativeEvent.coordinate.longitude,
    });
    };
  
    let markerCoordinates;

  if (selectedLocation) {
    markerCoordinates = {
      latitude: selectedLocation.lat,
      longitude: selectedLocation.lng,
    };
  }
  

  const savePickedLocationHandler = useCallback(() => {
        // if (!selectedLocation) {
        //      // could show an alert!
        //     return;
        //   }
    props.navigation.navigate("NewPlace", {
      pickedLocation: selectedLocation
    });
  }, [selectedLocation]);
  



   useEffect(() => {
    props.navigation.setOptions({
      headerRight: () => (
      <TouchableOpacity style={styels.HeaderbuttonText} 
      onPress={savePickedLocationHandler}>
        <Text style={styels.headerButton}>Save</Text>
      </TouchableOpacity>
    ),
    });
  }, []);


  return <MapView
    style={styels.map}
    region={mapRegion}
    onPress={selectLocationHandler} >
           {markerCoordinates && (
         <Marker title="Picked Location" coordinate={markerCoordinates} />
       )}

  </MapView>
  
}

export const screenOptions = (navData) => {
  return {
    headerTitle: "Map",
    
   
    headerStyle: {
      backgroundColor: Colors.primary,
    },
    headerTintColor: "white",
  };
};

const styels = StyleSheet.create({
  map: {
    flex: 1,
  },
  HeaderbuttonText: {
    marginHorizontal: 20,
  },
  headerButton: {
    fontSize: 18,
    color: Platform.OS === "android" ? "white" : Colors.primary, 
  }
});


export default MapScreen;
