import React from "react";
import { Platform } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { Ionicons } from "@expo/vector-icons";

import { createDrawerNavigator } from "@react-navigation/drawer";

import PlaceListScreen, {
  screenOptions as placeListScreenOptions,
} from "../screens/PlaceListScreen";
import PlaceDetailScreen, {
  screenOptions as placeDetailScreenOptions,
} from "../screens/PlaceDetailScreen";
import MapScreen, {
  screenOptions as mapScreenOptions,
} from "../screens/MapScreen";
import NewPlaceScreen from "../screens/NewPlaceScreen";

import SignInScreen, {
  screenOptions as SignInScreenOptions,
} from "../screens/SignInScreen";
import HeaderButton from "../components/UI/HeaderButton";
import Colors from "../constants/Colors";

const Drawer = createDrawerNavigator();

const HomeStack = createStackNavigator();
const MainStack = createStackNavigator();

const HomeStackScreen = ({ navigation }) => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="Places"
        component={PlaceListScreen}
        options={placeListScreenOptions}
      />

      <HomeStack.Screen
        name="Map"
        component={MapScreen}
        options={mapScreenOptions}
      />
      <HomeStack.Screen
        name="PlaceDetail"
        component={PlaceDetailScreen}
        options={placeDetailScreenOptions}
        // options={{
        //   title: "Details",
        //   headerStyle: {
        //     backgroundColor: Colors.primary,
        //   },
        //   headerTintColor: "white",
        // }}
      />
      <HomeStack.Screen
        name="NewPlace"
        component={NewPlaceScreen}
        options={{
          title: "Add Place",
          headerStyle: {
            backgroundColor: Colors.primary,
          },
          headerTintColor: "white",
        }}
      />
    </HomeStack.Navigator>
  );
};

const DrawerStackScreen = ({ navigation }) => {
  return (
    <MainStack.Navigator>
      <MainStack.Screen
        name="SignIn"
        component={SignInScreen}
        options={SignInScreenOptions}
      />
    </MainStack.Navigator>
  );
};

export default PlacesNavigator = (props) => {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Burger">
        <Drawer.Screen name="Places" component={HomeStackScreen} />
        <Drawer.Screen name="Sign Up" component={DrawerStackScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};
